import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './game.css'

export default class PlayZone extends Component {
  render() {
    return(
      <div className="option" onClick={() => {this.props.choose(this.props.id)}}>
        {String.fromCharCode(65 + this.props.id) + ".  " + this.props.option}
      </div>
    )
  }
}
