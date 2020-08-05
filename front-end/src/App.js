import React, { Component } from "react";
import APIController from './APIController';
import Beer from './Beer';
import "./App.css";

class App extends Component{
  state = { beers: [] };

  componentDidMount(){
    APIController.getAllBeers().then(beers => this.setState({ beers }));
  }

  handleDelete = (id) => {
    const beers = this.state.beers.filter(beer => beer._id !== id);
    this.setState({ beers: beers});
  }

  render(){
    return (
      <span className="App">
        {this.state.beers.map(beer => <Beer beer={beer} onDelete={this.handleDelete} />)}

        <button style={{width: "300px"}}>Add New Beer +</button>
      </span>
    )
  }
}

export default App;
