'use strict';

import React from 'react';
import model from '../utils/model';
import { browserHistory } from 'react-router'

export default class Makes extends React.Component {
  constructor(props) {
        super(props);
    }

	showdetails(event) {
		console.log(event.target.value);
    if (event.target.value != '0|0|0') {
		  browserHistory.push('/details/'+event.target.value);
    };
	}

  render() {
    return (
        <li>
          <span>{this.props.name}</span>
          <span>{this.props.niceName}</span>
          <span className="dd"><select onChange={this.showdetails}><option value={`0|0|0`}>Select</option>{this.props.years.map(year => <option value={`${this.props.make}|${this.props.niceName}|${year.year}`}>{year.year}</option>)}</select></span>
        </li>
      
    );
  }
}
