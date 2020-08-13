import React from 'react'
import APIController from './APIController'
import './Beer.css'

class Beer extends React.Component {
  state = {beer: null, isEditing: true}
  isEditing = true;

  constructor(props) {
    super(props);
    this.state.beer = props.beer;
    if(props.isEditing !== null || props.isEditing !== undefined){
      this.state.isEditing = props.isEditing;
    }
    else{
      this.state.isEditing = true;
    }
  }

  edit(e){
    e.preventDefault();
    this.setState({isEditing: !this.state.isEditing});
  }

  delete(e){
    e.preventDefault();
    APIController.deleteBeer(this.state.beer._id);
    this.props.onDelete(this.state.beer._id);
  }

  update(e){
    e.preventDefault();
    APIController.updateBeer(this.state.beer._id, this.state.beer);
    this.edit(e);
  }

  changeHandler = (event) =>{
    this.state.beer[event.target.name] = event.target.value;
  }

  render() {
    return (
      <form id="beer" onSubmit={(e) => this.update(e)}>
          <img src="https://illustoon.com/photo/3821.png" alt="Beer Img" width="300"></img>
          <div id="content">
            {this.state.isEditing
              ? <input type="text" id="name" name="name" placeholder="Beer Name" defaultValue={this.state.beer.name} onChange={this.changeHandler}></input>
              : <h1 id="name">{this.state.beer.name}</h1>
            }
            {this.state.isEditing
              ? <input type="text" id="desc" name="description" placeholder="Beer Desrciption" defaultValue={this.state.beer.description} onChange={this.changeHandler}></input>
              : <p id="desc">{this.state.beer.description}</p>
            }
            <table>
              <tr>
                <th>Bitterness</th>
                  {this.state.isEditing
                    ? <td><input type="number" id="bitterness" name="bitterness" placeholder="Beer Bitterness" min="1" max="5" defaultValue={this.state.beer.bitterness} onChange={this.changeHandler}></input></td>
                    : <td>{this.state.beer.bitterness}</td>
                  }
              </tr>
              <tr>
                <th>Taste</th>
                  {this.state.isEditing
                    ? <td><input type="number" id="taste" name="taste_intensity" placeholder="Beer Taste Intesity" min="1" max="5" defaultValue={this.state.beer.taste_intensity} onChange={this.changeHandler}></input></td>
                    : <td>{this.state.beer.taste_intensity}</td>
                  }
              </tr>
              <tr>
                <th>Foam</th>
                  {this.state.isEditing
                    ? <td><input type="number" id="foam" name="foam_intensity" placeholder="Beer Foam Intesity" min="1" max="5" defaultValue={this.state.beer.foam_intensity} onChange={this.changeHandler}></input></td>
                    : <td>{this.state.beer.foam_intensity}</td>
                  }
              </tr>
              <tr>
                <th>CO2</th>
                 {this.state.isEditing
                    ? <td><input type="number" id="co2" name="co2_feel" placeholder="Beer CO2 Feel" min="1" max="5" defaultValue={this.state.beer.co2_feel} onChange={this.changeHandler}></input></td>
                    : <td>{this.state.beer.co2_feel}</td>
                  }
              </tr>
            </table>
          </div>
          <div id="buttons">
            {this.state.isEditing
              ? <button type="submit">Save</button>
              : <button onClick={(e) => {this.edit(e)}}>Edit</button>
            }            
            <button onClick={(e) => {this.delete(e)}}>Delete</button>
          </div>
      </form>    
    );
  }
}

export default Beer