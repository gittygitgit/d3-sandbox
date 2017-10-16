import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
export default class Symbol extends React.Component {
  constructor(props) {
    super(props);
    console.log("Symbol");
  }

  render() {
    const {x, y, width, height, textSize, data} = this.props;
//    console.log(data);
    
    let percentOpen = data.numOptionsOpen / data.numOptions;

//    console.log("Symbol::render [percentOpen=%s]", percentOpen);

    let fill; 
    if (percentOpen > .9) {
      fill = "green";
    } else if (percentOpen > .1) {
      fill = "orange";
    } else {
      fill = "red";
    }
    return (
      <g>
      <rect x={x} y={y} width={width} height={height} fill={fill}/>
      <text x={x + 2} y={y + 16} fontSize={textSize} fontFamily="Roboto" fill="white">
        {data.name}
      </text>
      </g>
    )
  }
}

Symbol.propTypes = {
  data: PropTypes.object.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  textSize: PropTypes.number.isRequired
}
