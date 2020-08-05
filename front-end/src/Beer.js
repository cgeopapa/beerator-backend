import React from 'react'
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
    fetch("beer/"+this.beer._id, {method: "DELETE"})
      .then(super.getAllBeers());
  }

  render() {
    return (
      <form id="beer">
          <img src="https://dj0m4io8o9yuz.cloudfront.net/storage/media/catalog/products/420/0/4200001800/az_2018_sku_alfabottle500_650x650.jpg?id=1561383954" alt="Illustration of Vulture" width="300"></img>
          <div id="content">
            {this.isEditing
              ? <input type="text" id="name" name="name" placeholder="Beer Name"></input>
              : <h1>{this.beer.name}</h1>
            }
            {this.isEditing
              ? <input type="text" id="desc" name="description" placeholder="Beer Desrciption"></input>
              : <p>{this.beer.description}</p>
            }
            <table>
              <tr>
                <th>Bitterness</th>
                  {this.isEditing
                    ? <td><input type="number" id="bitterness" name="bitterness" placeholder="Beer Bitterness" min="1" max="5"></input></td>
                    : <td>{this.beer.bitterness}</td>
                  }
              </tr>
              <tr>
                <th>Taste</th>
                  {this.isEditing
                    ? <td><input type="number" id="taste" name="taste_intensity" placeholder="Beer Taste Intesity" min="1" max="5"></input></td>
                    : <td>{this.beer.taste_intensity}</td>
                  }
              </tr>
              <tr>
                <th>Foam</th>
                  {this.isEditing
                    ? <td><input type="number" id="foam" name="foam_intensity" placeholder="Beer Foam Intesity" min="1" max="5"></input></td>
                    : <td>{this.beer.foam_intensity}</td>
                  }
              </tr>
              <tr>
                <th>CO2</th>
                 {this.isEditing
                    ? <td><input type="number" id="co2" name="co2_feel" placeholder="Beer CO2 Feel" min="1" max="5"></input></td>
                    : <td>{this.beer.co2_feel}</td>
                  }
              </tr>
            </table>
          </div>
          <div id="buttons">
            {this.isEditing
              ? <button>Save</button>
              : <button onClick={(e) => {this.edit(e)}}>Edit</button>
            }            
            <button onClick={(e) => {this.delete(e)}}>Delete</button>
          </div>
      </form>    
    );
  }
}

export default Beer