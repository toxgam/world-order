import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Draggable from 'react-draggable'

import './GameScreen.css'



export default class piece extends Component {
  state = {controlledPosition: null}

  componentDidMount() {
    if (this.props.setPositions) {
      this.props.setPositions()
    }
  }

  handleStop = (e, position) => {
    if (this.props.check !== undefined) {
      let match = this.props.check()
      if (match !== null) {
        console.log(match)
        this.setState({controlledPosition: {x: position.x - match.x, y: position.y - match.y}})
      } else {
        this.setState({controlledPosition: {x: 0, y: 0}})
      }
    }
  }

  render() {
    const {controlledPosition} = this.state
    return(
      this.props.type === "option" ? 
        (<Draggable position={controlledPosition} onStop={this.handleStop}>
          {this.piece()}
        </Draggable>) : 
        this.piece()
    )
  }

  piece = () => (<div className="piece">{this.props.label}</div>)
}
