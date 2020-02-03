import React from 'react'
import Player from '../Components/Player'


function chooseStreamUrl(streams) {
  const audio = document.createElement('audio');

  // find a playable media type
  var url = "", type = "", playable = ""
  for (const stream of streams) {
    // canPlayType returns "probably", "maybe", and ""
    var status = audio.canPlayType(stream["type"])
    if (status === "") {
      status = "not"
    }
    console.log("Media type " + stream["type"] + " is " + status + " playable.")

    // status hierarchy: probably > maybe > not
    if (status === "probably" || (status === "maybe" && playable === "")) {
      url = stream["url"]
      type = stream["type"]
      playable = status
    }
  }

  if (url === "") {
    console.log("No stream is playable.")
  } else {
    console.log("Chose url " + url + " (" + type + ").")
  }

  return url
}


function isOnline() {
  console.log("Device is" + (navigator.onLine ? " " : " not ") + "online.")
  return navigator.onLine
}


class Radio extends React.Component {
  constructor(props) {
    super(props)

    // set radio's initial state
    this.state = {}

    // bind function callbacks
    this.onReady = this.onReady.bind(this)
    this.onBuffer = this.onBuffer.bind(this)
    this.togglePlaying = this.togglePlaying.bind(this)
    this.onError = this.onError.bind(this)
  }

  componentDidMount() {
    // use the stream id to load the config json
    // TODO: Find a better way to access the streams dir
    const station_id = this.props.location.pathname
    const config = require("../../public/streams" + station_id + ".json")
    console.log("Settings loaded from ../../public/streams" + station_id + ".json")

    // set the page title to the radio station's name
    document.title = config["name"]

    // choose the stream url (must be accessible and playable)
    config["streamUrl"] = chooseStreamUrl(config["streams"])

    // use the default logo if none has been provided
    if (config["logo"] === "") {
      config["logo"] = "logos/default.png"
    }

    // set the radio's initial state
    config["isOnline"] = isOnline() // is the device online
    config["isBroadcasting"] = true // is the radio station broadcasting
    config["isPlaying"] = false     // is the audio playing
    config["isReady"] = false       // is the Player ready to play

    // add the relevant data to the radio's state
    this.setState(config)
  }

  onBuffer() {
    // stream is buffering
    this.setState({ isReady: false })
    console.log("Stream is buffering.")

    // check the internet status (did we lose internet?)
    this.setState({ isOnline: isOnline() })
  }

  onReady() {
    // stream is now ready to play
    console.log("Stream is ready to play.")
    this.setState({
      isReady: true,
      isBroadcasting: true,
    })
  }

  togglePlaying() {
    if (this.state.isPlaying === false) {
      // paused -> loading
      this.setState({ isPlaying: true })
      console.log("User requested play.")

    } else {
      // loading/playing -> paused
      this.setState({ isPlaying: false})
      console.log("User requested pause.")
    }
  }

  onError() {
    console.log("Error playing " + this.state.streamUrl + ".")

    // update isReady and isPlaying, to be safe (should already be false)
    this.setState({
      isReady: false,
      isPlaying: false,
    })

    if (isOnline() === false) {
      // internet connection lost
      this.setState({ isOnline: false })

    } else {
      // the station must not be broadcasting
      console.log("Url " + this.state.streamUrl + " is not broadcasting.")
      this.setState({ isBroadcasting: false })

      // TODO: try swapping stream urls
      // this.setState({ streamUrl: this.state.streams[???]["url"] })
    }
  }

  render() {
    // render the radio
    return (
      <Player
        // player settings
        streamUrl={this.state.streamUrl}
        streams={this.state.streams}
        logo={this.state.logo}
        foregroundColor={this.state.foregroundColor}
        backgroundColor={this.state.backgroundColor}

        // player controls
        isOnline={this.state.isOnline}
        isBroadcasting={this.state.isBroadcasting}
        isPlaying={this.state.isPlaying}
        isReady={this.state.isReady}
        onReady={this.onReady}
        onBuffer={this.onBuffer}
        togglePlaying={this.togglePlaying}
        onError={this.onError}
      />
    )
  }
}


export default Radio
