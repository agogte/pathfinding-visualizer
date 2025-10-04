import React, { Component } from "react";

export default class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isFinish, isStart } = this.props;
    const extraClassName = isFinish
      ? "node-finish"
      : isStart
      ? "node-start"
      : "";
    return <div className="node">{`node ${extraClassName}`}</div>;
  }
}

export const DEFAULT_NODE = {
  row: 0,
  col: 0,
};
