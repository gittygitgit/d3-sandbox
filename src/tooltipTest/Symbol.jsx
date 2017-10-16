import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withTooltip, Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

export default class Symbol extends React.Component {
  constructor(props) {
    super(props);
    console.log("Symbol");
  }

  componentDidMount() {
    console.log("Symbol::componentDidMount");
  }

  render() {
    const Chip = (props) => {
      return (
	<g>
	  <rect x={props.x} y={props.y} width={props.width} height={props.height} fill={props.fill}/>
	  <text x={props.x + 2} y={props.y + 16} fontSize={props.textSize} fontFamily="Roboto" fill="white">
	    {props.name}
	  </text>
	</g>
      );
    }

    const ChipWithTooltip = withTooltip(Chip, {
      title: 'Welcome to React with tooltip',
      position: 'bottom',
    });

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
      <ChipWithTooltip x={x} y={y} width={width} height={height} textSize={textSize} fill={fill} name={data.name}/>
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
