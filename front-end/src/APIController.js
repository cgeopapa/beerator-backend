class APIController {

  static getAllBeers() {
    return fetch('/beers')
    .then(res => res.json())
    .then(beers => beers);
  }
}

export default APIController;