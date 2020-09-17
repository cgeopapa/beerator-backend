import React from 'react'
import APIController from './APIController'
import './Beer.css'

export default class Beer extends React.Component {
  state = {beer: null, isEditing: true}
  isEditing = true;
  imageUpdate = false;

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
    APIController.deleteBeer(this.state.beer._id, this.state.beer);
    this.props.onDelete(this.state.beer._id);
  }

  update(e){
    e.preventDefault();
    console.log(e);

    var formData = new FormData();
    formData.append('name', this.state.beer.name);
    formData.append('description', this.state.beer.description);
    formData.append('imageURL', this.state.beer.imageURL);
    if(this.imageUpdate)
    {
      formData.append('image', this.state.beer.image, this.state.beer.image.name);
    }

    APIController.updateBeer(this.state.beer._id, formData);
    this.edit(e);
    this.imageUpdate = false;
  }

  changeHandler = (event) =>{
    this.state.beer[event.target.name] = event.target.value;
  }

  imagePreview(e){
    this.imageUpdate = true;
    let beer = this.state.beer;
    beer.imageURL = URL.createObjectURL(e.target.files[0]);
    beer.image = e.target.files[0];
    
    this.setState({
      beer: beer 
    });
  }

  render() {
    return (
      <form id="beer" onSubmit={(e) => this.update(e)}>
        <div id="photo">
          <img src={this.state.beer.imageURL? this.state.beer.imageURL : this.state.imagePreview} alt="Beer Img" width="300"></img>
          {this.state.isEditing
            ? <label id="photo_button">
                <input id="image" type="file" accept="image/*" capture="environment" onChange={this.imagePreview.bind(this)}/>
                Take a photo
              </label>
            : <span></span>
          }
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
