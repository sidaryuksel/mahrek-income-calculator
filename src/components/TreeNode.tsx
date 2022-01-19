import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import { CustomNodeElementProps } from 'react-d3-tree/lib/types/common';
import { useCenteredTree } from "./helpers/helpers";
import BasicCard from "./BasicCard";
import storeType from "../redux/actions/storeType";
import { CardPropType } from "./PropType";
import { connect } from "react-redux";

const containerStyles = {
  width: "100vw",
  height: "100vh"
};

const TreeNode: React.FC<CardPropType> = ({ persons }) => {
  const [containerRef] = useCenteredTree();
  //const [nodes, setNodes] = useState(persons)

  const nodeSize = { x: 200, y: 200 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -100, y: -80 };

  // Here we're using `renderCustomNodeElement` render a component that uses
  // both SVG and HTML tags side-by-side.
  // This is made possible by `foreignObject`, which wraps the HTML tags to
  // allow for them to be injected into the SVG namespace.
  const renderForeignObjectNode = ({ nodeDatum }: CustomNodeElementProps) => (
    <g>
      <circle r={1}></circle>
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject {...foreignObjectProps} >
        <BasicCard {...nodeDatum} />
      </foreignObject>
    </g>
  );

  return (
    <div style={containerStyles} ref={containerRef as React.LegacyRef<HTMLDivElement>}>
      <Tree
        data={persons}
        translate={{ x: 500, y: 100 }}
        nodeSize={nodeSize}
        pathFunc="step"
        orientation="vertical"
        renderCustomNodeElement={(rd3tProps: CustomNodeElementProps) => renderForeignObjectNode(rd3tProps)}
      />
    </div>
  );
};

const mapState = (state: storeType) => {
  return {
    persons: state.persons,
  }
}

export default connect(mapState)(TreeNode);
