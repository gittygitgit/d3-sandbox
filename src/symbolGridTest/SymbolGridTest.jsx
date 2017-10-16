"use strict"

import React from 'react';
import { AutoSizer } from 'react-virtualized';
import SymbolGrid from './SymbolGrid';
import styles from './SymbolGridTest.css';
const numSymbols = 50;

const randomNum     = () => Math.floor(Math.random() * 1000);

const symbols = ["A", "AAPL", "AMD", "ANF", "GE", "XOM", "RL", "AMZN", "IBM", "INTC", "V", "TEAM", "MO", "GUSH", "BIDU", "MSFT", "IMAX", "FB", "EBAY", "PCN", "PFE", "PG", "PM", "PNC", "LLL", "LMT", "LZB", "S", "SAM", "SHW", "STWD", "CSCO", "CITI", "C", "CFG", "CL", "COH", "COKE", "UPS", "UTX", "WFC", "WHR", "WMT", "WSM", "WWE", "YUM", "Y", "GDDY", "CAT", "GIS", "GM", "GPS" ];

let genSymbolData = (name) => {
  let numOptions = Math.floor(Math.random() * 1000);
  let numOptionsOpen = Math.floor(Math.random() * numOptions);
//  console.log("name=%s, numOptions=%s, numOptionsOpen=%s", name, numOptions, numOptionsOpen);
  return {
    'name':name, 
    'numOptions':numOptions,
    'numOptionsOpen':numOptionsOpen 
  };
};

let data = symbols.map((symbol) => {
  return genSymbolData(symbol);
});

console.log(genSymbolData("A"));
console.log(data);

const randomDataSet = () => {
//  return Array.apply(null, {length: numSymbols}).map(() => {
//    console.log(symbols.length);
//  });
  return symbols.map((symbol) => {
    return genSymbolData(symbol);
  });
};

export default class SymbolGridTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: randomDataSet()};
    this.randomizeData=this.randomizeData.bind(this);
  }

  randomizeData() {
//    console.log("randomizeData");
    this.setState({ data: randomDataSet() });
  }

  render() {
    return (
    <div style={{display: 'flex'}}>
      <div style={{flex: '1 1 auto', minHeight: '100px'}}>
      <AutoSizer onResize={({width, height}) => console.log("onResize [width=%s, height=%s]", width, height)}>
        {({ width, height}) => {
//          console.log("SymbolGridTest::render [width=%s, height=%s]", width, height);
          return (
            <SymbolGrid width={width} height={height} data={this.state.data} onTimeout={this.randomizeData}/>
          )
        }}
      </AutoSizer>
      </div>
{/*
      <div className="controls">
        <button className="btn randomize" onClick={() => this.randomizeData()}>
          Randomize Data
        </button>
      </div>
*/}
    </div>
    );
  
  }
}


