
import React, { Component } from 'react'
import logo from './logo.svg'
import fonts from './font.css'
import * as API from './api.js'

const PASTEL = [
  "#ffb3ba",
  "#ffdfba",
  "#ffffba",
  "#baffc9",
  "#bae1ff"
]

class App extends Component {

  constructor() {
    super()
    this.state = {
      color: PASTEL[0],
      quote: "derp",
      meme: ""
    }
  }

  componentDidMount() {
    API.getPage().then((json) => {
      this.setState({
        color: json.backgroundColor,
        quote: json.positiveMessage,
        meme: API.imageURL()
      })
    })
  }

  render() {
    return (
      <div style={{backgroundColor: this.state.quote}}>
        <div style={{ background:"url("+ this.state.meme +")"}}/>
        <h1 style={{ color: "white", fontFamily: "Eksell, serif", fontSize: 100 }}>{ this.state.quote }</h1>
      </div>
    )
  }
}

export default App
