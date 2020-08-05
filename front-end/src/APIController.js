class APIController {

  static getAllBeers() {
    return fetch('/beers')
    .then(res => res.json())
    .then(beers => beers);
  }

  static deleteBeer(id) {
    fetch("beer/"+id, {method: "DELETE"})
  }
}

export default APIController;