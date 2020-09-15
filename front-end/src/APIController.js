import axios from 'axios';

export default class APIController {

  static getAllBeers() {
    return fetch('/beers')
    .then(res => res.json())
    .then(beers => beers);
  }

  static deleteBeer(id, beer) {
    axios({
      method: 'delete',
      url: '/beer/'+id,
      data: beer,
      headers: {'Content-Type': 'multipart/form-data', 'accept': 'application/json' }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
        console.log(response);
    });

  }

  static updateBeer(id, beer){
    axios({
      method: 'put',
      url: '/beer/'+id,
      data: beer,
      headers: {'Content-Type': 'multipart/form-data', 'accept': 'application/json' }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
        console.log(response);
    });
  }

  static addBeer(beer){
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: '/beer',
        data: beer,
        headers: {'Content-Type': 'multipart/form-data', 'accept': 'application/json' }
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (response) {
          reject(response);
      });
    })
  }
}
