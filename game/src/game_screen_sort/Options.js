import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './GameScreen.css'

import Piece from './Piece'

export default class Options extends Component {
  render() {
    return(
      <div className="options">
        {this.props.options.map((e, i) => 
          <Piece 
            key={i} 
            type="option" 
            label={e} 
            setPositions={() => {this.props.setPositions(i)}} 
            check={() => this.props.check(i)} 
            offset={this.props.optionOffset[i]}
          />
        )}
      </div>
    )
  }
}
