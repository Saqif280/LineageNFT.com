import React from "react";

const zoomIn = (e) => {
  const node = e.currentTarget.parentElement.parentElement;
  const svgCanvas = node.parentElement;

  // remove and reappend node to fix svg order
  node.remove();
  svgCanvas.append(node);

  e.currentTarget.classList.remove("no-animation");
  e.currentTarget.classList.add("zoom");
};

const zoomOut = (e) => {
  e.currentTarget.classList.remove("zoom");
};

export const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
  generateRef,
}) => {
  return (
    <g>
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject
        {...foreignObjectProps}
        // ref={refGenerator(nodeDatum)}
        className="no-animation"
        onMouseEnter={zoomIn}
        onMouseLeave={zoomOut}
        ref={generateRef(nodeDatum)}
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
              <li key={k}>{v}</li>
            ))}
          </ul>
        </div>
      </foreignObject>
    </g>
  );
};

export const getDynamicPathClass = ({ source, target }, orientation) => {
  if (source.depth === 0) {
    return "link__invisible";
  } else if (source.depth === 1) {
    return "link__gensesis-family";
  } else if (!target.children) {
    // Target node has no children -> this link leads to a leaf node.
    return "link__to-leaf";
  } // Style it as a link connecting two branch nodes by default.
  else return "link__to-branch";
};
