import React, { Component } from 'react'
import StarshipsList from '../StarshipsList/StarshipsList'
import StarshipDialog from '../StarshipDialog/StarshipDialog'

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <StarshipsList/>
        <StarshipDialog/>
      </div>
    )
  }
}
