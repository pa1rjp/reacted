'use strict';

import React from 'react';
import Models from './Models';
import Header from './Header';
import Loader from './Loader';
/*import store from '../data/store';*/
import model from '../utils/model';

export default class ModelPage extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          models: [],
          loading: true
      };
    }

    componentDidMount() {
      let self = this;
        model
          .getModels(this.props.params.id)
          .then(models => {
            self.setState({
                models: JSON.parse(models).models,
                loading: false
            })
            console.log(self.state);
          });
    }

  render() {
    if (this.state.loading) {
          return (
            <Loader></Loader>
          );
      }else {
          return (
            <div>
              <Header title="Models in " model={this.props.params.id} path="/"></Header>
              <ul>{this.state.models.map((model, i) => { return <Models make={this.props.params.id} key={i} index={i} {...model} />})}</ul>
            </div>
          );
      }
  }
}
