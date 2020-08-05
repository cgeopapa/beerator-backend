import React from 'react'
import APIController from './APIController'
import './Beer.css'

class Beer extends React.Component {
  beer;
  isEditing = false;

  constructor(props) {
    super(props);
    this.beer = props.beer;
  }

  edit(e){
    e.preventDefault();
    this.isEditing = !this.isEditing;
    this.setState({isEditing: this.isEditing});
  }

  delete(e){
    e.preventDefault();
    APIController.deleteBeer(this.beer._id);
    this.props.onDelete(this.beer._id);
  }

  update(e){
    e.preventDefault();
    APIController.updateBeer(this.beer._id)
    this.edit(e);
  }

  render() {
    return (
      <form id="beer" onSubmit={(e) => this.update(e)}>
          <img src="https://illustoon.com/photo/3821.png" alt="Beer Img" width="300"></img>
          <div id="content">
            {this.isEditing
              ? <input type="text" id="name" name="name" placeholder="Beer Name" value={this.beer.name}></input>
              : <h1>{this.beer.name}</h1>
            }
            {this.isEditing
              ? <input type="text" id="desc" name="description" placeholder="Beer Desrciption" value={this.beer.description}></input>
              : <p>{this.beer.description}</p>
            }
            <table>
              <tr>
                <th>Bitterness</th>
                  {this.isEditing
                    ? <td><input type="number" id="bitterness" name="bitterness" placeholder="Beer Bitterness" min="1" max="5" value={this.beer.bitterness}></input></td>
                    : <td>{this.beer.bitterness}</td>
                  }
              </tr>
              <tr>
                <th>Taste</th>
                  {this.isEditing
                    ? <td><input type="number" id="taste" name="taste_intensity" placeholder="Beer Taste Intesity" min="1" max="5" value={this.beer.taste_intensity}></input></td>
                    : <td>{this.beer.taste_intensity}</td>
                  }
              </tr>
              <tr>
                <th>Foam</th>
                  {this.isEditing
                    ? <td><input type="number" id="foam" name="foam_intensity" placeholder="Beer Foam Intesity" min="1" max="5" value={this.beer.foam_intensity}></input></td>
                    : <td>{this.beer.foam_intensity}</td>
                  }
              </tr>
              <tr>
                <th>CO2</th>
                 {this.isEditing
                    ? <td><input type="number" id="co2" name="co2_feel" placeholder="Beer CO2 Feel" min="1" max="5" value={this.beer.co2_feel}></input></td>
                    : <td>{this.beer.co2_feel}</td>
                  }
              </tr>
            </table>
          </div>
          <div id="buttons">
            {this.isEditing
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