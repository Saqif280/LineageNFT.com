import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";

import useCenteredTree from "./hooks/useCenteredTree";
import useNavbarScrollPrevention from "./hooks/useNavbarScrollPrevention";
import useLineageCrestContract from "./hooks/useLineageCrestContract";
import { Authorized } from "@solana/web3.js";

import "./react-d3-tree-custom.css";

const containerStyles = {
  width: "100vw",
  height: "100vh",
};

// Here we're using `renderCustomNodeElement` render a component that uses
// both SVG and HTML tags side-by-side.
// This is made possible by `foreignObject`, which wraps the HTML tags to
// allow for them to be injected into the SVG namespace.
const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => {
  // console.log(nodeDatum);
  return (
    <g>
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject
        {...foreignObjectProps}
        style={{
          border: "1px solid black",
          background: "#fffcf6",
        }}
      >
        <img
          width="300px"
          height="300px"
          src="https://lineage-nft-test.s3.us-west-2.amazonaws.com/nft-data/nft-components/nft_1.png"
        />
        <div
          style={{
            background: "#fffcf6",
            display: "inline-block",
            margin: "8px 8px 8px 0",
            verticalAlign: "top",
          }}
        >
          <h3 style={{ marginRight: "auto" }}>{nodeDatum.name}</h3>
          <ul>
            {Object.entries(nodeDatum.attributes).map(([k, v]) => (
              <li>{v}</li>
            ))}
          </ul>
          {/* {nodeDatum.children && (
          <button style={{ width: "100%" }} onClick={toggleNode}>
            {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
          </button>
        )} */}
        </div>
      </foreignObject>
    </g>
  );
};

const toLoreString = (i) => `TestModifier${i}`;

const crestLoreAsAttributes = (crestLore) => {
  return crestLore.reduce((agg, cur, i) => ({
    ...agg,
    [`Lore ${i}`]: toLoreString(cur),
  }));
};

const getDynamicPathClass = ({ source, target }, orientation) => {
  if (!target.children) {
    // Target node has no children -> this link leads to a leaf node.
    return "link__to-leaf";
  } else if (source.name === "root") {
    return "link__invisible";
  }

  // Style it as a link connecting two branch nodes by default.
  return "link__to-branch";
};

const LineageViewer = () => {
  useNavbarScrollPrevention();
  const [tree, setTree] = useState({ name: "root", attributes: {} });
  const [translate, containerRef] = useCenteredTree();
  const [contractWithSigner] = useLineageCrestContract();

  const nodeSize = { x: 525, y: 300 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -(nodeSize.x / 2),
    y: -(nodeSize.y / 2),
  };

  const nodeTypeClassNames = {
    rootNodeClassName: "node__root",
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
    setTree({
      name: "root",
      attributes: {},
      children: await Promise.all([1, 2, 3, 4, 5, 6, 7, 8].map(getTree)),
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#fffcf6" }}>
      <div style={containerStyles} ref={containerRef}>
        <Tree
          data={tree}
          translate={translate}
          nodeSize={nodeSize}
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
          }
          orientation="vertical"
          pathFunc={getDynamicPathClass}
          {...nodeTypeClassNames}
        />
      </div>
    </div>
  );
};

export default LineageViewer;
