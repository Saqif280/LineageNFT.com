import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import Tree from "react-d3-tree";

import sampleData from "./data/sample-data.json";
import useNavbarScrollPrevention from "./hooks/useMakeNavbarUnscrollable";

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

const useCenteredTree = () => {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 2, y: height / 2 });
    }
  }, []);
  return [translate, containerRef];
};

const LineageViewer = () => {
  useNavbarScrollPrevention();
  const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 200, y: 200 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };

  return (
    <>
      <div style={{ "background-color": "#fffcf6" }}>
        <div style={containerStyles} ref={containerRef}>
          <Tree
            data={sampleData}
            translate={translate}
            nodeSize={nodeSize}
            orientation="vertical"
          />
        </div>
      </div>
    </>
  );
};

export default LineageViewer;
