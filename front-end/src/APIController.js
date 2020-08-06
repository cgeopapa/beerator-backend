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
}
