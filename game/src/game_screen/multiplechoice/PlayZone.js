import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {TweenLite} from 'gsap'

import './game.css'

import Option from './Option'

const animationTime = 0.5

export default class PlayZone extends Component {
  choose(id) {
    const barChart = document.getElementsByClassName("option-bar")
    const options = document.getElementsByClassName("option")
    const chosenOption = options[id]
    const answer = options[this.props.answer]

    // Answer right / wrong animation
    if (this.props.answer !== id) {
      TweenLite.to(chosenOption, animationTime, {color: 'red'})
    }

    TweenLite.to(answer, animationTime, {color: 'green'})

    // All options move to left
    TweenLite.to(options, animationTime, { float: "left", width: "35%", "margin-left": "5%"})

    // Graph animation
    const maxData = Math.max(...this.props.data)
    console.log(this.props.data)
    TweenLite.to(barChart, animationTime, {
      width: (i) => {return Math.max(1, (50 * this.props.data[i] / maxData)) + "%"},
      visibility: "visible"
    })
  }

  render() {
    const maxData = Math.max(...this.props.data)

    return(
      <div className="play-zone">
        {this.props.options.map((e, i) =>
          <Option
            key={i}
            id={i}
            option={e}
            data={this.props.data[i]}
            cover={this.props.data[i] / maxData}
            choose={this.choose.bind(this)}
          />
        )}
      </div>
    )
  }
}
