"use strict"

import React from 'react';
import ReactDom from 'react-dom';
import { select } from 'd3-selection'
import financeTdWeb from 'finance-td-web';
import Update from './Update';

export default class UpdateTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.data = this.data.bind(this);
  }

  data() {
    console.log("UpdateTest::data");
//    var symbols =  financeTdWeb.getSymbolArray();
//    console.log(symbols);

    var x = 0;
    var y = 0;
    var width = 48;
    var height = 30;
    //var viewportWidth = 900;
    //var viewportHeight = 500;
    var padding = 4;
    var symbolsPerRow = Math.floor(this.state.viewportWidth / (width + padding));
    console.log(symbolsPerRow);
 /*   var data = symbols.map( (s, index) => {
      x = (index % symbolsPerRow) * (width + padding);
      y = Math.floor(index / symbolsPerRow) * (height + padding);
      return {name: s, x: x, y: y, width: width, height: height, pct: Math.random()}
    });*/
    return [{ x: 0, y: 0, width: width, height: height, name: 'AAPL', pct: Math.random()}];
    //return data;
  }

  componentDidMount() {
    console.log("UpdateTest::componentDidMount");
    this.timer = setInterval(() => {
      console.log("here");
      this.setState({
        data: this.data()
      });
    }, 1000);
  }

  render() {
    if (this.state.data == "") {
      return null;
    }
    return (
      <div>
        <Update data={this.state.data}/>
      </div>
    )
  }
}
