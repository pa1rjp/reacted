'use strict';

import React from 'react';

export default class Styles extends React.Component {
  render() {
    return (
        <li>
          <span>{this.props.name}</span>
          <span>Body:{this.props.submodel.body}, Trim:{this.props.trim}</span>
        </li>
    );
  }
}
