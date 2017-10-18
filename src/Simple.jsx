import React, { Component } from 'react';
import { scaleLinear } from 'd3';
import { max } from 'd3';
import { select } from 'd3';
import { event } from 'd3';
import './public/css/Simple.css'
export default class Simple extends Component {
  constructor(props){
    super(props)
    this.createSimple = this.createSimple.bind(this)
  }
  componentDidMount() {
    this.createSimple()
  }
  componentDidUpdate() {
    console.log(this.props.data)
    this.createSimple()
  }
  createSimple() {
    console.log("Simple::createSimple");
    const node = this.node
    
    // Define the div for the tooltip
//    var div = select("body").append("div")
//      .attr("class", "foo")
//      .style("opacity", 0);
 
   
    var div = select("body").select("div.tooltip");
 
    var svgContainer = select(node);

    var symbolGroups = 
      svgContainer
      .selectAll('g')
      .data(this.props.data)
      .enter()
      .append('g');

    symbolGroups
      .append('rect')
      .attr('width', d => d.width)
      .attr('height', d => d.height)
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('fill', 'red');

    symbolGroups
      .append('rect')
      .attr('width', d => d.width * d.pct)
      .attr('height', d => d.height)
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('fill', 'limegreen'); 

    symbolGroups
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('x', d => d.x + d.width / 2)
      .attr('y', d => d.y + d.height /2 + 4)
      .attr('font-family', "Roboto")
      .attr('fill', 'white')
      .text(d => d.name);

    symbolGroups
      .append('rect')
      .attr('width', d => d.width)
      .attr('height', d => d.height)
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('opacity', 0)
      .style("cursor", 'pointer')
      .on("mouseover", function(d) {    
         console.log("event [x=%s, y=%s]", event.pageX, event.pageY);
         console.log(event);
         div.transition()    
	   .duration(200)    
	   .style("opacity", .7);    
	 div.html(d.name + " [" + d.pct + "% open]")  
	   .style("left", event.offsetX+ "px")    
	   .style("top", event.offsetY+ "px");  
      })          
      .on("mouseout", function(d) {    
        div.transition()    
        .duration(500)    
        .style("opacity", 0);  
      });


/*
    v = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);  const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, this.props.size[1]])
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')
   
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove()
   
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => i * 25)
      .attr('y', d => this.props.size[1] — yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25)
*/
   }
   render() {
      return (
        <div>
        <div style={{position:'relative', height: '500px', overflowY: 'scroll', width: '800px'}}>
	  <svg ref={node => this.node = node} 
	    style={{backgroundColor: 'blue'}} height="13600" width="800">
	  </svg>
          <div className="tooltip" style={{opacity: 0}}/>
        </div>
        </div>
      );
   }
}
