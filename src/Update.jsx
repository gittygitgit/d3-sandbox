"use strict"

import React from 'react';
import { select } from 'd3-selection'
import { scaleLinear } from 'd3';
import { max } from 'd3';
import { event } from 'd3';
export default class Update extends React.Component {

  constructor(props) {
    super(props);
    this.onData = this.onData.bind(this);
  }

  componentDidMount() {
    this.onData()
  }

  componentDidUpdate() {
    console.log(this.props.data)
    this.onData()
  }

  onData() {
    console.log("Update::onData");
    console.log(this.props.data);
    const node = this.node;

    var container = select(node);

    container
    .attr("width", 200)
    .style("background-color", "red"); 
 
    var u = container
    .selectAll('rect')
    .data(this.props.data);

    //enter
    u
    .enter()
    .append('rect')
    .attr('width', d => d.width)
    .attr('height', d => d.height * d.pct)
    .attr('x', d => d.x)
    .attr('y', d => d.y)
    .attr('fill', 'yellow')
    .merge(u)
    .attr('height', d => d.height * d.pct);
    
  }

  render() {
    if (this.props.data == "") {
      return null;
    }
    return (
      <div>
      <svg ref={node => this.node = node}
	style={{backgroundColor: 'blue'}} height="400" width="400">
      </svg>
      </div>
    )
  }
}
