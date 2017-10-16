import React from 'react';
import PropTypes from 'prop-types';
import { AutoSizer } from 'react-virtualized';
import Symbol from './Symbol';

// Returns the largest X coordinate from the data set
const xMax = (data) => d3.max(data, (d) => d[0]);

// Returns the largest Y coordinate from the data set
const yMax = (data) => d3.max(data, (d) => d[1]);

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props) => {
  return d3.scaleLinear()
    .domain([0, xMax(props.data)])
    .range([props.padding, props.width - props.padding * 2]);
};

// Returns a function  that "scales" Y coordinates from the data to fit the chart
const yScale = (props) => {
  return d3.scaleLinear()
    .domain([0, yMax(props.data)])
    .range([props.height - props.padding, props.padding]);
};

export default class SymbolGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps, nextState) {
//    console.log("SymbolGrid::componentWillUpdate [width-old=%s, width-new=%s]", this.props.width, nextProps.width);
  }

  componentDidMount() {
/*    this.timer = setInterval(
      () => {
        this.props.onTimeout() 
      }, 1000
    );*/
  }

  render() {
    const { data, width, height } = this.props;
    let numSymbols = data.length;
    let symbolWidth=42;
    let symbolHeight=21;
    let padding=2;
    let textSize=14;
    let numSymbolsPerRow = Math.floor(( width / (symbolWidth + padding)));
    if (numSymbolsPerRow == 0) {
      return null;
    }
//    console.log("SymbolGrid::render [symbolWidth=%s, padding=%s, numSymbols=%s, numSymbolsPerRow=%s]", symbolWidth, padding, numSymbols, numSymbolsPerRow);
    let foo=300;
    let viewboxString="0 0 1424 100";
    return (
      
      <div style={{flex: '1 1 auto', width: width, height: height, backgroundColor: 'blue'}}>
        <svg width={width} height={height} >
          {
            this.props.data.map((datum, index) => {
              let rownum = Math.floor(index / numSymbolsPerRow);
 
              let x = padding + ((index % numSymbolsPerRow) * symbolWidth) + ((index % numSymbolsPerRow)* padding);
              let y = padding + (rownum * symbolHeight) + (rownum * padding); 
              console.log("SymbolGrid::render [x=%s, y=%s, width=%s, index=%s, numSymbolsPerRow=%s]", x, y, width, index, numSymbolsPerRow);
              return (
                <Symbol data={datum} x={x} y={y} textSize={textSize} width={symbolWidth} height={symbolHeight} key={datum.name}/>
              );
            })
          }
        </svg>
      </div>
    );
{/*
    const scales = {xScale: xScale(this.props), yScale: yScale(this.props) };
    return <svg width={this.props.width} height={this.props.height}>
      <DataRectanglesWText {...this.props} {...scales} />
    </svg>
*/}

  }
}

SymbolGrid.propTypes = {
  data: PropTypes.array.isRequired
}
