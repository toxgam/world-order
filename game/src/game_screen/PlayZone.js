import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './GameScreen.css'

import Options from './Options'
import Targets from './Targets'

const isBetween = (a, l, r) => {
  return (l <= a && a <= r)
}

const intersect = (a, b) => {
  if (isBetween(a.left, b.left, b.right) || isBetween(a.right, b.left, b.right)) {
    return (isBetween(a.top, b.top, b.bottom) || isBetween(a.bottom, b.top, b.bottom))
  }
  return false
}

export default class PlayZone extends Component {
  positions = []

  check(i) {
    const currentNode = window.document.getElementsByClassName("options")[0].getElementsByClassName("piece")[i]
    const current = currentNode.getBoundingClientRect()
    // console.log(this.positions)
    // console.log(current.top)
    const match = this.positions.reduce((res, e) => (intersect(current, e) ? {x: current.left - e.left, y: current.top - e.top} : res), null)
    return match
  }

  setPositions(i) {
    this.positions.push(window.document.getElementsByClassName("targets")[0].getElementsByClassName("piece")[i].getBoundingClientRect())
  }

  componentDidMount() {

  }

  render() {
    return(
      <div className="play-zone">
        <Options options={Object.values(this.props.match)} check={this.check.bind(this)} />
        <Targets targets={Object.keys(this.props.match)} setPositions={this.setPositions.bind(this)} />
      </div>
    )
  }
}
