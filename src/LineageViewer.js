import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";
import Tree from "react-d3-tree_callback-ref-prop";

import useCenteredTree from "./hooks/useCenteredTree";
import useNavbarScrollPrevention from "./hooks/useNavbarScrollPrevention";
import useLineageCrestContract from "./hooks/useLineageCrestContract";
import {
  renderForeignObjectNode,
  getDynamicPathClass,
  nodeTypeClassNames,
} from "./lineageViewerTreeUtils";
import { partial, range } from "lodash";

import "./react-d3-tree-custom.css";
import useBrowserWallet from "./hooks/useBrowserWallet";

const containerStyles = {
  width: "100vw",
  height: "100vh",
};

const toLoreString = (i) => `TestModifier${i}`;

const crestLoreAsAttributes = (crestLore) => {
  return crestLore.reduce((agg, cur, i) => ({
    ...agg,
    [`Lore ${i}`]: toLoreString(cur),
  }));
};

const LineageViewer = () => {
  useNavbarScrollPrevention();
  const nodeRefs = useRef({});
  const [currentAccount, ...rest] = useBrowserWallet();
  const [translate, containerRef] = useCenteredTree();
  const [tree, setTree] = useState({ name: "root", attributes: {} });
  const [ownedTokens, setOwnedTokens] = useState([]);
  const [contractWithSigner, signer, walletConnIsLoading] =
    useLineageCrestContract(currentAccount);

  const nodeSize = { x: 525, y: 300 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -(nodeSize.x / 2),
    y: -(nodeSize.y / 2),
  };

  useEffect(() => {
    if (walletConnIsLoading) {
      return;
    }

    const fetchUserTokens = async () => {
      const currentAddress = signer.getAddress();
      const getNthTokenForCurrentUser = partial(
        contractWithSigner.tokenOfOwnerByIndex,
        signer.getAddress()
      );

      const balance = await contractWithSigner.balanceOf(currentAddress);
      const tokenIds = (
        await Promise.all(
          range(0, balance).map((x) => getNthTokenForCurrentUser(x))
        )
      ).map((bigNumber) => bigNumber.toNumber());

      setOwnedTokens(tokenIds);
    };

    fetchUserTokens();
  }, [walletConnIsLoading, contractWithSigner, signer]);

  // This gets replaced with an api call to localhost:3001/get-nft-data
  const getTree = async (rootTokenId) => ({
    name: `Token ${String(rootTokenId).padStart(4, "0")}`,
    tokenId: rootTokenId,
    attributes: crestLoreAsAttributes(
      await contractWithSigner.getCrestLore(rootTokenId)
    ),
    children: await Promise.all(
      (await contractWithSigner.getChildren(rootTokenId))
        .map((bigNumber) => bigNumber.toNumber())
        .map(getTree)
    ),
  });

  // TODO: Our first render displays nothing. How can we preload this intelligently?
  // Answer: I think we just wait until we can create a cached version of this tree on the backend.
  useEffect(async () => {
    if (walletConnIsLoading) {
      return;
    }

    setTree({
      name: "root",
      attributes: {},
      children: await Promise.all([1, 2, 3, 4, 5, 6, 7, 8].map(getTree)),
    });
  }, [walletConnIsLoading]);

  const toCoord = (element) => {
    const matrix = element.transform.baseVal[0].matrix;
    return { x: matrix.e, y: matrix.f };
  };

  const [myTranslate, setMyTranslate] = useState({ x: 0, y: 0 });

  return (
    <>
      <div style={{ height: "100px" }}></div>
      <div style={{ backgroundColor: "#fffcf6" }}>
        {ownedTokens
          .map((id) => (
            <button
              onClick={() => {
                const name = `Token ${String(id).padStart(4, "0")}`;
                setMyTranslate({
                  x: -1 * toCoord(nodeRefs.current[name]).x + translate.x,
                  y: -1 * toCoord(nodeRefs.current[name]).y + translate.y,
                });
              }}
            >
              Token {id}
            </button>
          ))
          .slice(0, 5)}

        <div style={containerStyles} ref={containerRef}>
          <Tree
            data={tree}
            translate={myTranslate}
            nodeSize={{ x: nodeSize.x * 1.5, y: nodeSize.y * 1.5 }}
            renderCustomNodeElement={(rd3tProps) =>
              renderForeignObjectNode({
                ...rd3tProps,
                foreignObjectProps,
              })
            }
            callbackRefForNode={(data, ref) => {
              nodeRefs.current[data.name] = ref;
            }}
            orientation="vertical"
            // pathFunc={getCustomPath}
            pathClassFunc={getDynamicPathClass}
            {...nodeTypeClassNames}
          />
        </div>
      </div>
    </>
  );
};

export default LineageViewer;
