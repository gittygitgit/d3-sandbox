"use strict"

import React from 'react';
import { select } from 'd3-selection' 
import Simple from './Simple';
import nasdaqTdWeb from 'nasdaq-td-web';

export default class SimpleTest extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    console.log("SimpleTest::componentDidMount");
  }
  render() {
    var symbols =  nasdaqTdWeb.getSymbolArrayStartsWith('A');
    console.log(symbols);
    
    var x = 0;
    var y = 0;
    var width = 48;
    var height = 30;
    var viewportWidth = 500;
    var viewportHeight = 500;
    var padding = 4;
    var symbolsPerRow = Math.floor(viewportWidth / (width + padding));
    console.log(symbolsPerRow);
    var foo = symbols.map( (s, index) => {
      x = (index % symbolsPerRow) * (width + padding);
      y = Math.floor(index / symbolsPerRow) * (height + padding); 
      return {name: s, x: x, y: y, width: width, height: height, pct: Math.random()}   
    });
    console.log("foo");
    console.log(foo);
    /*var data = [
      {x:0,y:0, width: 48, height:30, name: 'AAPL', pct: .34},
      {x:50,y:0, width: 48, height:30, name: 'MO', pct: .89},
      {x:100,y:0, width: 48, height:30, name: 'V', pct: .89},
      {x:150,y:0, width: 48, height:30, name: 'IBM', pct: .89},
      {x:200,y:0, width: 48, height:30, name: 'MSFT', pct: .89},
      {x:250,y:0, width: 48, height:30, name: 'A', pct: .89},
      {x:300,y:0, width: 48, height:30, name: 'CITI', pct: .89},
      {x:350,y:0, width: 48, height:30, name: 'GM', pct: .89}
    ];*/
    var data = foo;

    return (
      <div>
	<Simple data={data} size={[{viewportWidth},{viewportHeight}]} />
      </div>
    )
  }
}


