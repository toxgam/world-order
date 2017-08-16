import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './GameScreen.css'

export default class QuestionZone extends Component {
  render() {
    return(
      <div className="question-zone">
        <p>
          {this.props.question}
        </p>
      </div>
    )
  }
}
