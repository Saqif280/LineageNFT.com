import React, { useEffect, useState, useCallback } from "react";
import Tree from "react-d3-tree";

import useCenteredTree from "./hooks/useCenteredTree";
import useNavbarScrollPrevention from "./hooks/useNavbarScrollPrevention";
import useLineageCrestContract from "./hooks/useLineageCrestContract";
import {
  renderForeignObjectNode,
  getDynamicPathClass,
} from "./lineageViewerTreeUtils";

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
  const [currentAccount, ...rest] = useBrowserWallet();
  const [tree, setTree] = useState({ name: "root", attributes: {} });
  const [translate, containerRef] = useCenteredTree();
  const [contractWithSigner, signer, walletConnIsLoading] =
    useLineageCrestContract(currentAccount);

  const nodeSize = { x: 525, y: 300 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -(nodeSize.x / 2),
    y: -(nodeSize.y / 2),
  };

  const nodeTypeClassNames = {
    rootNodeClassName: "node node__root",
    branchNodeClassName: "node__branch",
    leafNodeClassName: "node__leaf",
  };

  // recursively builds json blob for <Tree />
  const getTree = async (rootTokenId) => ({
    name: `Token ${String(rootTokenId).padStart(4, "0")}`,
    attributes: crestLoreAsAttributes(
      await contractWithSigner.getCrestLore(rootTokenId)
    ),
    children: await Promise.all(
      (await contractWithSigner.getChildren(rootTokenId)).map(getTree)
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
  }, [walletConnIsLoading, getTree, setTree]);

  return (
    <div style={{ backgroundColor: "#fffcf6" }}>
      <div style={containerStyles} ref={containerRef}>
        <Tree
          data={tree}
          translate={translate}
          nodeSize={{ x: nodeSize.x * 1.5, y: nodeSize.y * 1.5 }}
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
          }
          orientation="vertical"
          // pathFunc={getCustomPath}
          pathClassFunc={getDynamicPathClass}
          onNodeMouseOver={(nodeDatum, e) => {
            console.log(nodeDatum);
          }}
          onNodeMouseOut={(nodeDatum, e) => {
            console.log(nodeDatum);
          }}
          {...nodeTypeClassNames}
        />
      </div>
    </div>
  );
};

export default LineageViewer;
