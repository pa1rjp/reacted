'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Makes extends React.Component {
  render() {
    return (
      <Link key={this.props.id} to={`/model/${this.props.niceName}`}>
        <li>
          <span>{this.props.name}</span>
          <span>{this.props.niceName}</span>
          <span>{this.props.models.length}</span>
        </li>
      </Link>
    );
  }
}
