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
              <input type="text" id="desc" name="description" placeholder="Beer Desrciption" required="required" onChange={this.changeHandler}></input>
            <table>
              <tr>
                <th>Bitterness</th>
                    <td><input type="number" id="bitterness" name="bitterness" placeholder="Bitterness" required="required" min="1" max="5" onChange={this.changeHandler}></input></td>
              </tr>
              <tr>
                <th>Taste</th>
                    <td><input type="number" id="taste" name="taste_intensity" placeholder="Taste Intesity" required="required" min="1" max="5" onChange={this.changeHandler}></input></td>
              </tr>
              <tr>
                <th>Foam</th>
                    <td><input type="number" id="foam" name="foam_intensity" placeholder="Foam Intesity" required="required" min="1" max="5" onChange={this.changeHandler}></input></td>
              </tr>
              <tr>
                <th>CO2</th>
                    <td><input type="number" id="co2" name="co2_feel" placeholder="CO2 Feel" required="required" min="1" max="5" onChange={this.changeHandler}></input></td>
              </tr>
            </table>
          </div>
          <div id="buttons">
            <button type="submit" style={{width:"90%"}}>Save</button>
          </div>
      </form>    
    );
  }    
}