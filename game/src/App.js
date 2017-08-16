import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './App.css'

import GameScreen from './game_screen/GameScreen'

export default class App extends Component {
  render() {
    return (
      <GameScreen 
        width={window.innerWidth}
        height={window.innerHeight}
      />
    )
  }
}
