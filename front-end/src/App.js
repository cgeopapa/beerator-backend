import React, { Component } from "react";
import APIController from './APIController';
import Beer from './Beer';
import CreateBeer from './CreateBeer';
import "./App.css";

export default class App extends Component{
  state = { beers: [], isAdding: false };
  newBeer;

  componentDidMount(){
    APIController.getAllBeers().then(beers => this.setState({ beers }));
  }

  handleDelete = (id) => {
    const beers = this.state.beers.filter(beer => beer._id !== id);
    this.setState({ beers: beers});
  }

  addBeer = (beer) => {
    const beers = this.state.beers;
    beers.push(beer);
    this.setState({beers: beers});
  }

  addBeerAfterFetch(beer){
    this.newBeer = beer; 
    this.setState({isAdding: true});
  }

  render(){
    return (
      <span className="App">
        {this.state.beers.map(beer => <Beer beer={beer} isEditing={false} onDelete={this.handleDelete} />)}

        <CreateBeer beer={this.newBeer} onAdd={this.addBeer} />
      </span>
    )
  }
}
