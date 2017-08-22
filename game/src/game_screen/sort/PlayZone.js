import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './game.css'

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
  targetPositions = []
  optionPositions = []

  constructor(props) {
    super(props)

    this.state = {
      matching: Array(Object.keys(props.match).length),
      optionOffset: Array(Object.keys(props.match).length)
    }
  }

  check(i) {
    const currentNode = window.document.getElementsByClassName("options")[0].getElementsByClassName("piece")[i]
    const current = currentNode.getBoundingClientRect()
    const match = this.targetPositions.reduce((res, e, i) => (intersect(current, e) ? i : res), null)

    if (match !== null) {
      const matching = this.state.matching
      const optionOffset = this.state.optionOffset
      const initPosotion = this.optionPositions[i]
      const e = this.targetPositions[match]

      if (matching[match] !== undefined && matching[match] !== null) {
        optionOffset[matching[match]] = {x: 0, y: 0}
      }

      matching[match] = i
      optionOffset[i] = {x: e.left - initPosotion.left, y: e.top - initPosotion.top}
      this.setState({optionOffset, matching})
    } else {
      const matching = this.state.matching
      const match = matching.findIndex(e => e === i)
      matching[match] = null
      const optionOffset = this.state.optionOffset
      optionOffset[i] = {x: 0, y: 0}
      this.setState({optionOffset})
    }
  }

  setPositions(className, i) {
    const arr = (className === "targets") ? this.targetPositions : this.optionPositions
    arr.push(window.document.getElementsByClassName(className)[0].getElementsByClassName("piece")[i].getBoundingClientRect())
  }

  // componentDidMount() {
  //   console.log(this.targetPositions)
  //   console.log(this.optionPositions)
  // }

  render() {
    return(
      <div className="play-zone">
        <Options 
          options={Object.values(this.props.match)} 
          setPositions={this.setPositions.bind(this, "options")} 
          check={this.check.bind(this)}
          optionOffset={this.state.optionOffset}
        />

        <Targets 
          targets={Object.keys(this.props.match)} 
          setPositions={this.setPositions.bind(this, "targets")} 
        />
      </div>
    )
  }
}
