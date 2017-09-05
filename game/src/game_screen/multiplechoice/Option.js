import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './game.css'

const pad = (n, width, z) => {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const convertNumberToString = (n) => {
  if (n > Math.pow(10, 12)) {
    return Math.round(n / Math.pow(10, 10)) / 100 + " trillion"
  } else if (n > Math.pow(10, 9)) {
    return Math.round(n / Math.pow(10, 7)) / 100 + " billion"
  } else if (n > Math.pow(10, 6)) {
    return Math.round(n / Math.pow(10, 4)) / 100 + " million"
  } else if (n >= 1000) {
    return Math.floor(n / 1000) + "," + pad(n % 1000, 3, '0')
  } else {
    return n
  }
}

export default class PlayZone extends Component {
  render() {
    return(
      <div className="option-area">
        <div className="option" onClick={() => {this.props.choose(this.props.id)}}>
          {String.fromCharCode(65 + this.props.id) + ".  " + this.props.option}
        </div>
        {(this.props.cover > 0.5) ? 
          <div className="option-bar">
            <div className="option-bar-data">{convertNumberToString(this.props.data)}</div>
          </div> :
          <div className="option-bar"></div>
        }
        {(this.props.cover > 0.5) ? 
          <div className="option-data"></div> :
          <div className="option-data">
            {convertNumberToString(this.props.data)}
          </div>
        }
      </div>
    )
  }
}
