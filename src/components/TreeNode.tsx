import React from "react";
import Tree from "react-d3-tree";
import { CustomNodeElementProps } from 'react-d3-tree/lib/types/common';
import dataJson from "./data/data.json";
import { useCenteredTree } from "./helpers/helpers";
import BasicCard from "./BasicCard";

const containerStyles = {
  width: "100vw",
  height: "100vh"
};

// Here we're using `renderCustomNodeElement` render a component that uses
// both SVG and HTML tags side-by-side.
// This is made possible by `foreignObject`, which wraps the HTML tags to
// allow for them to be injected into the SVG namespace.
const nodeSize = { x: 200, y: 200 };
const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -100, y: -80 };

const renderForeignObjectNode = (
  { nodeDatum }: CustomNodeElementProps
) => (
  < g >
    <circle r={1}></circle>
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject {...foreignObjectProps} >
      <BasicCard {...nodeDatum} />
    </foreignObject>
  </g >
);

export default function TreeNode() {
  const [translate, containerRef] = useCenteredTree();

  return (
    <div style={containerStyles} ref={containerRef as React.LegacyRef<HTMLDivElement>}>
      <Tree
        data={dataJson}
        translate={{ x: 300, y: 300 }}
        nodeSize={nodeSize}
        pathFunc="step"
        renderCustomNodeElement={(rd3tProps: CustomNodeElementProps) =>
          renderForeignObjectNode(rd3tProps)
        }
        orientation="vertical"
      />
    </div>
  );
}
