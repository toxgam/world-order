import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './game.css'

export default class QuestionZone extends Component {
  render() {
    return(
      <div className="question-zone">
        {this.props.question}
      </div>
    )
  }
}
