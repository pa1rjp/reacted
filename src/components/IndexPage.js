'use strict';

import React from 'react';
import Makes from './Makes';
import Header from './Header';
import Loader from './Loader';
/*import store from '../data/store';*/
import model from '../utils/model';

export default class IndexPage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
      		makes: [],
      		loading: true
    	};
    }

    componentDidMount() {
    	let self = this;
        model
      		.getMakes()
      		.then(makes => {
        		self.setState({
          			makes: JSON.parse(makes).makes,
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
    				<Header title="Select a make" path="/"></Header>
      				<ul>{this.state.makes.map((store, i) => {return <Makes key={i} index={i} {...store} />})}</ul>
    			</div>
    		);
    	}
  	}
}
