import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import ControlBar from './ControlBar'
import GameZone from './sort/GameZone'

export default class GameScreen extends Component {
  mockData = {
    question: "Drag to order",
    match: {
      "1": "Vietnam",
      "2": "Laos",
      "3": "Campodia"
    }
  }

  render() {
    return(
      <div style={{height: this.props.height, width: this.props.width}}>
        <ControlBar />
        <GameZone mockData={this.mockData}/>
      </div>
    )
  }
}