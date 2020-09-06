import axios from 'axios';

export default class APIController {

  static getAllBeers() {
    return fetch('/beers')
    .then(res => res.json())
    .then(beers => beers);
  }

  static deleteBeer(id) {
    fetch("beer/"+id, {method: "DELETE"});
  }

  static updateBeer(id, beer){
    fetch("beer/"+id, {method: "PUT", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(beer)});
  }

  static addBeer(beer){
    console.log(beer.get('image'))
    axios({
      method: 'post',
      url: '/beer',
      data: beer,
      headers: {'Content-Type': 'multipart/form-data', 'accept': 'application/json' }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
        console.log(response);
    });
    // axios.post("/beer", beer, {}).then(res => {
    //   console.log(res);
    // })
    // fetch("beer", {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(beer)})
  }
}
