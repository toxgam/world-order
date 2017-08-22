import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './game.css'

import QuestionZone from './QuestionZone'
import PlayZone from './PlayZone'

export default class GameZone extends Component {
  render() {
    return(
      <div className="game-zone">
        <QuestionZone question={this.props.mockData.question}/>
        <PlayZone match={this.props.mockData.match}/>
      </div>
    )
  }
}
