import React from 'react'
import APIController from './APIController'
import './Beer.css'

export default class CreateBeer extends React.Component{
  state = {
    beer: {
      name: "",
      description: "",
      image: ""
    },
    previewImage: "https://illustoon.com/photo/3821.png",
    defaultImage: "https://illustoon.com/photo/3821.png"
  };

  constructor(props){
    super(props);

    this.imagePreview = this.imagePreview.bind(this);
  }

  post(e){
    e.preventDefault();

    var formData = new FormData();
    formData.append('name', this.state.beer.name);
    formData.append('description', this.state.beer.description);
    formData.append('image', this.state.beer.image, this.state.beer.image.name);
    
    APIController.addBeer(formData).then((response) => this.props.onAdd(response.data));
    
    this.setState({previewImage: this.state.defaultImage});
    document.newBeerForm.reset();
  }

  changeHandler = (event) =>{
    this.state.beer[event.target.name] = event.target.value;
  }

  imagePreview(e){
    let beer = this.state.beer;
    beer.image = e.target.files[0];
    
    this.setState({
      previewImage: URL.createObjectURL(e.target.files[0]),
      beer: beer
    });
  }

  render() {
    return (
      <form id="beer" name="newBeerForm" onSubmit={(e) => this.post(e)}>
        <div id="photo">
          <img src={this.state.previewImage} alt="Beer Img" width="300"></img>
          <label id="photo_button">
            <input  type="file" accept="image/*" capture="environment" required="required" onChange={this.imagePreview}/>
            Take a photo
          </label>
        </div>
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