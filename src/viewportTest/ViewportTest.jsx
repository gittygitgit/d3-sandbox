"use strict"

import React from 'react';
import { AutoSizer } from 'react-virtualized';
import tooltip from 'react-toolbox/lib/tooltip';

import styles from './ViewportTest.css';

export default class ViewportTest extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    console.log("ViewportTest::ctor");
  }

  onClick() {
    console.log("onClick");
  }

  render() {
  
    return (
      <div style={{display: 'flex', minWidth: '100', flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
        <div style={{flex: '1 1 auto',  minWidth: '100%', backgroundColor: 'blue', fontFamily: 'Roboto' }}>
          Testing.
        </div> 
	<svg style={{flex: '1 1 auto', minWidth: '100'}}>
	  <rect width="50" height="30" x="0" fill="red" />
	  <rect width="30" height="30" x="0" fill="limegreen"/>
	  <text x="8" y="22" fontFamily="Roboto" fontSize="15">
	    AAPL
	  </text>
	  <rect  width="50" height="30" x="0" style={{fill: 'blue', opacity: 0, cursor: 'pointer'}} onClick={this.onClick}>
	    <title style={{color: 'yellow'}}>Hello <br/>There</title>
	  </rect>
	  <rect width="50" height="30" x="52" fill="red"/>
          <text x="60" y="22" fontFamily="Roboto" fontSize="15">
            AMZN
          </text>
 
          <rect width="50" height="30" x="104" fill="red"/>
	  <text x="112" y="22" fontFamily="Roboto" fontSize="15">
            BIDU
          </text>
 
          <rect width="50" height="30" x="156" fill="red"/>
	  <rect width="50" height="30" x="208" fill="red"/>
	  <rect width="50" height="30" x="260" fill="red"/>
          <rect width="50" height="30" y="32" x="0" fill="red"/>
          <rect width="50" height="30" y="32" x="52" fill="red"/>
          <rect width="50" height="30" y="32" x="104" fill="red"/>
          <rect width="50" height="30" y="32" x="156" fill="red"/>
          <rect width="50" height="30" y="32" x="208" fill="red"/>
          <rect width="50" height="30" y="32" x="260" fill="red"/>
	  <rect width="50" height="30" y="132" x="0" fill="red"/>
          <rect width="50" height="30" y="132" x="52" fill="red"/>
          <rect width="50" height="30" y="132" x="104" fill="red"/>
          <rect width="50" height="30" y="132" x="156" fill="red"/>
          <rect width="50" height="30" y="132" x="208" fill="red"/>
          <rect width="50" height="30" y="132" x="260" fill="red"/>
 	  <rect width="50" height="30" y="232" x="0" fill="red"/>
          <rect width="50" height="30" y="232" x="52" fill="red"/>
          <rect width="50" height="30" y="232" x="104" fill="red"/>
          <rect width="50" height="30" y="232" x="156" fill="red"/>
          <rect width="50" height="30" y="232" x="208" fill="red"/>
          <rect width="50" height="30" y="232" x="260" fill="red"/>
 	  <rect width="50" height="30" y="332" x="0" fill="red"/>
          <rect width="50" height="30" y="332" x="52" fill="red"/>
          <rect width="50" height="30" y="332" x="104" fill="red"/>
          <rect width="50" height="30" y="332" x="156" fill="red"/>
          <rect width="50" height="30" y="332" x="208" fill="red"/>
          <rect width="50" height="30" y="332" x="260" fill="red"/>
 
	</svg>
      </div>
    );
  }
}

/*
export default () => {
  return <div>Testing</div>
}
*/
