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
        <PlayZone 
          options={this.props.mockData.options} 
          answer={this.props.mockData.answer}
        />
      </div>
    )
  }
}
