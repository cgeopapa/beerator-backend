import React from 'react'
import APIController from './APIController'
import './Beer.css'

export default class CreateBeer extends React.Component{
  emptyBeer = {
    name: "",
    description: "",
    bitterness: 0,
    taste_intensity: 0,
    foam_intensity: 0,
    co2_feel: 0
  };

  state = {beer: this.emptyBeer};

  constructor(props){
    super(props);
  }

  post(e){
    e.preventDefault();
    APIController.addBeer(this.state.beer);
    this.props.onAdd(this.state.beer);
    document.newBeerForm.reset();
  }

  changeHandler = (event) =>{
    this.state.beer[event.target.name] = event.target.value;
  }

  render() {
    return (
      <form id="beer" name="newBeerForm" onSubmit={(e) => this.post(e)}>
          <img src="https://illustoon.com/photo/3821.png" alt="Beer Img" width="300"></img>
          <div id="content">
              <input type="text" id="name" name="name" placeholder="Beer Name" required="required" onChange={this.changeHandler}></input>
              <textarea id="desc" name="description" placeholder="Beer Desrciption" required="required" onChange={this.changeHandler}></textarea>
          </div>
          <div id="buttons">
            <button type="submit" style={{width:"90%"}}>Save</button>
          </div>
      </form>    
    );
  }    
}