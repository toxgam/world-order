import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './game.css'

import QuestionZone from './QuestionZone'
import PlayZone from './PlayZone'

export default class GameZone extends Component {
  render() {
    return(
      <div className="game-zone">
        <QuestionZone question={this.props.data.question}/>
        <PlayZone 
          options={this.props.data.options}
          data={this.props.data.data}
          answer={this.props.data.answer}
        />
      </div>
    )
  }
}
