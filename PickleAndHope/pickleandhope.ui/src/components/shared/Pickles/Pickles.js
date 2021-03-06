import React, { Component } from 'react';
import SinglePickle from '../SinglePickle/SinglePickle';
import { getPickles } from '../../../helpers/data/pickleData';

class Pickles extends Component {
  state = {
    pickles: [
      // {id:1, type:"dill", numberInStock:12, size:"large", price:5}
      // {id:1, type:"spicy", numberInStock:34, size:"large", price:7}
    ],
  };

  componentDidMount() {
    getPickles()
      .then((pickles) => this.setState({ pickles }));
  }

  render() {
    const { pickles } = this.state;
    return pickles.map((pickle) => <SinglePickle key = {pickle.id} pickle = { pickle } />);
  }
}

export default Pickles;
