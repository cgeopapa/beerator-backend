import React from 'react'
import APIController from './APIController'
import './Beer.css'

export default class CreateBeer extends React.Component{
  state = {
    beer: {
      name: "",
      description: "",
      image: "https://illustoon.com/photo/3821.png"
    }
  };

  constructor(props){
    super(props);

    this.imagePreview = this.imagePreview.bind(this);
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

  imagePreview(e){
    let beer = this.state.beer;
    beer["image"] = URL.createObjectURL(e.target.files[0]);
    
    this.setState({
      beer: beer
    });
  }

  render() {
    return (
      <form id="beer" name="newBeerForm" onSubmit={(e) => this.post(e)}>
        <div id="photo" style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
          <img src={this.state.beer["image"]} alt="Beer Img" width="300"></img>
          <label id="photo_button">
            <input  type="file" accept="image/*" capture="environment" onChange={this.imagePreview}/>
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