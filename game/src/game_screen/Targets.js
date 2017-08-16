import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './GameScreen.css'

import Piece from './Piece'

export default class Targets extends Component {
  render() {
    return(
      <div className="targets">
        {this.props.targets.map((e, i) => <Piece key={i} type="target" label={e} setPositions={() => {this.props.setPositions(i)}} />)}
      </div>
    )
  }
}
