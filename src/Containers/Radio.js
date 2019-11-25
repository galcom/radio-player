import React from 'react'
import Player from '../Components/Player'
import queryString from 'query-string'
const isReachable = require('is-reachable')


function availabilityCheck(url) {
  isReachable('https://google.com')
  .then(internetStatus => {
    console.log("Internet is accessible")
    if (internetStatus){
    } else {
      console.log("Internet is not accessible")
    }
  })
  .catch(error => console.log("Failed to test google. Error: " + error))
}

class Radio extends React.Component {
  componentDidMount() {
    // load the stream id from the url query string
    const values = queryString.parse(this.props.location.search)

    // use the stream id to load the config json
    // TODO: Find a better way to access the streams dir
    const config = require("../../public/streams/" + values.id + ".json")
    console.log("Settings loaded from ../../public/streams/" + values.id + ".json")

    // set the page title to the radio station's name
    document.title = config["name"]

    // TODO: implement check if the station is available
    //availabilityCheck(this.state.streamUrl)

    // choose the stream url
    // TODO: Choose between the various streams (mp3, ogg, etc.)
    config["streamUrl"] = config["streams"][0]["url"]

    // use the default logo if none has been provided
    if (config["logo"] === "") {
      config["logo"] = "logos/default.png"
    }

    // set the radio's initial state
    config["playing"] = false
    config["ready"] = false

    // add the relevant data to the radio's state
    this.setState(config)
  }

  constructor(props) {
    super(props)

    // set radio's inital state
    this.state = {}

    this.onReady = this.onReady.bind(this)
    this.onBuffer = this.onBuffer.bind(this)
    this.togglePlaying = this.togglePlaying.bind(this)
  }

  onReady() {
    console.log("Stream is ready to play.")
    this.setState({ ready: true })
  }

  onBuffer() {
    this.setState({ ready: false })
    console.log("Stream is buffering.")
  }

  togglePlaying() {
    if (this.state.playing === false) {
      // TODO: implement check if the station is available
      //availabilityCheck(this.state.streamUrl)

      // TODO: Choose between the various streams (mp3, ogg, etc.)
      this.setState({ streamUrl: this.state.streams[0]["url"] })

      // paused -> loading
      this.setState({ playing: true })
      console.log("User requested play.")
    } else {
      // loading/playing -> paused
      this.setState({ playing: false})
      console.log("User requested pause.")
    }
  }

  render() {
    // render the radio
    return (
      <Player
        // player settings
        streamUrl={this.state.streamUrl}
        logo={this.state.logo}
        foregroundColor={this.state.foregroundColor}
        backgroundColor={this.state.backgroundColor}

        // player controls
        playing={this.state.playing}
        ready={this.state.ready}
        onReady={this.onReady}
        onBuffer={this.onBuffer}
        togglePlaying={this.togglePlaying}
      />
    )
  }
}


export default Radio
