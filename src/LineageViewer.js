import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";

import useCenteredTree from "./hooks/useCenteredTree";
import useNavbarScrollPrevention from "./hooks/useNavbarScrollPrevention";
import useLineageCrestContract from "./hooks/useLineageCrestContract";

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
}) => (
  <g>
    <circle r={15}></circle>
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject {...foreignObjectProps}>
      <div style={{ border: "1px solid black", backgroundColor: "#dedede" }}>
        <h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>
        {nodeDatum.children && (
          <button style={{ width: "100%" }} onClick={toggleNode}>
            {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
          </button>
        )}
      </div>
    </foreignObject>
  </g>
);

const toLoreString = (i) => `TestModifier${i}`;

const crestLoreAsAttributes = (crestLore) => {
  return crestLore.reduce((agg, cur, i) => ({
    ...agg,
    [`Lore ${i}`]: toLoreString(cur),
  }));
};

const LineageViewer = () => {
  useNavbarScrollPrevention();
  const [tree, setTree] = useState({});
  const [translate, containerRef] = useCenteredTree();
  const [contractWithSigner] = useLineageCrestContract();

  const nodeSize = { x: 200, y: 200 };
  //   const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };

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
          // renderCustomNodeElement={(rd3tProps) =>
          //   renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
          // }
          orientation="vertical"
        />
      </div>
    </div>
  );
};

export default LineageViewer;
