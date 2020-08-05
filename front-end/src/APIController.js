class APIController {

  static getAllBeers() {
    return fetch('/beers')
    .then(res => res.json())
    .then(beers => beers);
  }

  static deleteBeer(id) {
    fetch("beer/"+id, {method: "DELETE"});
  }

  static updateBeer(id){
    fetch("beer/"+id, {method: "PUT"});
  }
}

export default APIController;