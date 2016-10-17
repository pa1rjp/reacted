'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <h3><Link key={1} to={this.props.path}>{this.props.title}<span>{this.props.model}</span></Link></h3>
    );
  }
}
