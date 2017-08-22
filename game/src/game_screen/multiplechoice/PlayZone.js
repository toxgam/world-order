import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './game.css'

import Option from './Option'

export default class PlayZone extends Component {
  choose(id) {
    if (this.props.answer === id) {
      console.log("Yes")
    } else {
      console.log("No")
    }
  }

  render() {
    return(
      <div className="play-zone">
        {this.props.options.map((e, i) =>
          <Option
            key={i}
            id={i}
            option={e}
            choose={this.choose.bind(this)}
          />
        )}
      </div>
    )
  }
}
