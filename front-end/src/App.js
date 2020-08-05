import React, { Component } from "react";
import APIController from './APIController';
import Beer from './Beer';
import "./App.css";

class App extends Component{
  state = { beers: [] };

  componentDidMount(){
    APIController.getAllBeers().then(beers => this.setState({ beers }));
  }

  test(){
    console.log(APIController.getAllBeers());
  }
  
  render(){
    return (
      <span className="App">
        {this.state.beers.map(beer => <Beer beer={beer} />)}

        <button onClick={this.test}>Add New Beer +</button>
      </span>
    )
  }
}

export default App;
