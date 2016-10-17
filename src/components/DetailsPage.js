'use strict';

import React from 'react';
import Styles from './Styles';
import Header from './Header';
import Loader from './Loader';
/*import store from '../data/store';*/
import model from '../utils/model';
import { browserHistory } from 'react-router'

export default class DetailsPage extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          model: [],
          backurl: '',
          loading: true
      };
    }

    componentDidMount() {
      let self = this;
        model
          .getDetails(this.props.params.id)
          .then(models => {
            if (JSON.parse(models).years.length == 0) {
                alert("Details not found for the selected year. Redirecting back.");
                browserHistory.push('/model/'+self.props.params.id.split('|')[0]);
            } else {
              self.setState({
                model: JSON.parse(models),
                backurl: self.props.params.id.split('|')[0],
                loading: false
              });
            };
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
              <Header title={this.state.model.id} model={`- ${this.state.model.years[0].year}`} path={`/model/${this.state.backurl}`}></Header>
              <ul>{this.state.model.years[0].styles.map((style, i) => { return <Styles key={i} index={i} {...style} />})}</ul>
            </div>
          );
      }
  }
}
