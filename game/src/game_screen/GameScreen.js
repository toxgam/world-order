import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import ControlBar from './ControlBar'
import GameZone from './multiplechoice/GameZone'

import mapping from './mapFile'
import masterData from './data.js'

export default class GameScreen extends Component {
  // mockData = {
  //   question: "Drag to order",
  //   match: {
  //     "1": "Vietnam",
  //     "2": "Laos",
  //     "3": "Campodia"
  //   }
  // }

  constructor(props) {
    super(props)

    const numberOfCatergory = Object.keys(masterData).length

    const id = Object.keys(masterData)[Math.floor(Math.random() * numberOfCatergory)]
    const question = this.find(parseInt(id))
    const data = masterData[question.id]
    
    const optionIds = this.rng(4, data.length)

    this.data = {
      question: `Which of these country has the highest ${question.category}?`,
      options: optionIds.map(e => data[e][0]),
      data: optionIds.map(e => data[e][1].replace(/\D/g,'')),
      answer: optionIds.reduce((res, e, i) => (e < optionIds[res]) ? i : res, 0)
    }
  }

  find(id) {
    return mapping.reduce((res, e) => (e.id === id) ? e : res, -1)
  }

  rng(number, max) {
    const arr = []

    while(arr.length < number){
      const randomnumber = Math.floor(Math.random() * max)
      if(arr.indexOf(randomnumber) > -1) continue
      arr.push(randomnumber)
    }

    return arr
  }

  render() {
    return(
      <div style={{height: this.props.height, width: this.props.width}}>
        <ControlBar />
        <GameZone data={this.data}/>
      </div>
    )
  }
}
