
import React, { Component } from 'react'
import logo from './logo.svg'
import fonts from './font.css'
import * as API from './api.js'

const PASTEL = [
  "#c0392b",
  "#2980b9",
  "#16a085",
  "#34495e",
  "#d35400"
]

class App extends Component {

  constructor() {
    super()
    this.state = {
      message: "",
      imageUrl: "",
      redditLink: ""
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  componentWillMount() {
    console.log("doing this...");
    API.getMessage().then((message) => {
      this.setState({
        message
      })
    })
    API.getImage().then((image) => {
      this.setState({
        imageUrl: image[0],
        redditLink: image[1]
      })
    })
    document.body.style.backgroundColor = PASTEL[this.getRandomInt(PASTEL.length)];
  }

  render() {
    return (
      <div>
        <div id={"imgWrapper"}>
          <a href={this.state.redditLink}> <img src={this.state.imageUrl} /> </a>
        </div>
        <h1>{this.state.message}</h1>
        <div id="att">Made by <a href="https://twitter.com/stayfun_">@stayfun_</a> and <a href="https://twitter.com/_DanielSinclair">@_DanielSinclair</a>  </div>
      </div>
    )
  }
}

export default App
