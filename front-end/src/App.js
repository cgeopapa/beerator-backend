import React from "react"
import Beer from './Beer'
import "./App.css"

const beers = [
  {
    name: 'test01',
    description: 'desc01',
    bitterness: '1',
    taste_intensity: '2',
    foam_intensity: '3',
    co2_feel: '4'
  },
  {
    name: 'test02',
    description: 'desc02',
    bitterness: '1',
    taste_intensity: '2',
    foam_intensity: '3',
    co2_feel: '4'
  }
]

export default function App() {
  return (
    <span className="App">
      {beers.map(beer => <Beer beer={beer} />)}
    </span>
  )
}
