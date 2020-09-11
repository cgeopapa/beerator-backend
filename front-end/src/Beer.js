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
    APIController.deleteBeer(this.state.beer);
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

  imagePreview(e){
    let beer = this.state.beer;
    beer.image = e.target.files[0];
    
    this.setState({
      beer: beer 
    });
  }

  render() {
    return (
      <form id="beer" onSubmit={(e) => this.update(e)}>
        <div id="photo">
          <img src={this.state.beer.imageURL} alt="Beer Img" width="300"></img>
          <label id="photo_button">
            <input id="image" type="file" accept="image/*" capture="environment" onChange={this.imagePreview}/>
            Take a photo
          </label>
        </div>
          <div id="content">
            {this.state.isEditing
              ? <input type="text" id="name" name="name" placeholder="Beer Name" defaultValue={this.state.beer.name} onChange={this.changeHandler}></input>
              : <h1 id="name">{this.state.beer.name}</h1>
            }
            {this.state.isEditing
              ? <input type="text" id="desc" name="description" placeholder="Beer Desrciption" defaultValue={this.state.beer.description} onChange={this.changeHandler}></input>
              : <p id="desc">{this.state.beer.description}</p>
            }
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