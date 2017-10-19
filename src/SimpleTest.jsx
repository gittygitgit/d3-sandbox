"use strict"

import React from 'react';
import { select } from 'd3-selection' 
import Simple from './Simple';
import nasdaqTdWeb from 'nasdaq-td-web';

export default class SimpleTest extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.data.bind(this);
    this.state = {
      data:"",
      viewportWidth: 800,
      viewportHeight: 1600
    } 
  }

  data() {
    var symbols =  nasdaqTdWeb.getSymbolArray();
    console.log(symbols);
    
    var x = 0;
    var y = 0;
    var width = 60;
    var height = 30;
    //var viewportWidth = 900;
    //var viewportHeight = 500;
    var padding = 4;
    var symbolsPerRow = Math.floor(this.state.viewportWidth / (width + padding));
    console.log(symbolsPerRow);
    var data = symbols.map( (s, index) => {
      x = (index % symbolsPerRow) * (width + padding);
      y = Math.floor(index / symbolsPerRow) * (height + padding); 
      return {name: s, x: x, y: y, width: width, height: height, pct: Math.random()}   
    });
    return data;
  }
 

  componentDidMount() {
    console.log("SimpleTest::componentDidMount");
    this.timer = setInterval(() => {
      console.log("here");
      this.setState({
        data: this.data()
      });
    }, 2000);

  }
  render() {
   if (this.state.data == "") {
     return null;
   }
   return (
      <div>
	<Simple data={this.state.data}  height={10000} width={770}/>
      </div>
    )
  }
}


