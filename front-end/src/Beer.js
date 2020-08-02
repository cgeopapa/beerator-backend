import React from 'react'
import './Beer.css'

class Beer extends React.Component {
  beer;

  constructor(props) {
    super(props);
    this.beer = props.beer;
  }

  edit(){
    document.activeElement.blur();
    console.log("test");
  }

  render() {
    return (
      <div id="beer">
          <img src="https://dj0m4io8o9yuz.cloudfront.net/storage/media/catalog/products/420/0/4200001800/az_2018_sku_alfabottle500_650x650.jpg?id=1561383954" alt="Illustration of Vulture" width="300"></img>
          <div id="content">
            <h1>{this.beer.name}</h1>
            <p>{this.beer.description}</p>
            <table>
              <tr>
                <th>Bitterness</th>
                <td>{this.beer.bitterness}</td>
              </tr>
              <tr>
                <th>Taste</th>
                <td>{this.beer.taste_intensity}</td>
              </tr>
              <tr>
                <th>Foam</th>
                <td>{this.beer.foam_intensity}</td>
              </tr>
              <tr>
                <th>CO2</th>
                <td>{this.beer.co2_feel}</td>
              </tr>
            </table>
          </div>
          <div id="buttons">
            <button>Edit</button>
            <button>Delete</button>
          </div>
      </div>    
    );
  }
}

export default Beer