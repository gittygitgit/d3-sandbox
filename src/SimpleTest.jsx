"use strict"

import React from 'react';
import { select } from 'd3-selection' 
import Simple from './Simple';

export default class SimpleTest extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    console.log("SimpleTest::componentDidMount");
  }
  render() {
    var data = [
      {x:0,y:0, width: 48, height:30, name: 'AAPL', pct: .34},
      {x:50,y:0, width: 48, height:30, name: 'MO', pct: .89},
      {x:100,y:0, width: 48, height:30, name: 'V', pct: .89},
      {x:150,y:0, width: 48, height:30, name: 'IBM', pct: .89},
      {x:200,y:0, width: 48, height:30, name: 'MSFT', pct: .89},
      {x:250,y:0, width: 48, height:30, name: 'A', pct: .89},
      {x:300,y:0, width: 48, height:30, name: 'CITI', pct: .89},
      {x:350,y:0, width: 48, height:30, name: 'GM', pct: .89}
    ];

    return (
      <div>
	<Simple data={data} size={[500,500]} />
      </div>
    )
  }
}


