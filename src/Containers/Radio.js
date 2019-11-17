import React from 'react';
import Player from '../Components/Player'
import queryString from 'query-string'
const isReachable = require('is-reachable');

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
    console.log("Loading ../../public/streams/" + values.id + ".json")
    const config = require("../../public/streams/" + values.id + ".json");
    console.log(config)

    // choose the stream url
    // TODO: Choose between the various streams (mp3, ogg, etc.)
    const streamUrl = config["streams"][0]["url"]

    // get the logo url
    var logo = config["logo"]
    if (logo === "") {
      // fallback to default logo
      logo = "logos/default.png"
    }

    // add the relevant data to the radio's state
    this.setState({
      streamUrl: streamUrl,
      logo: logo,
    })
  }

  constructor(props) {
    super(props);

    // set initial radio state
    this.state = {
      playing: true,
      playControlImage: "Play",
      config: this.config,
    };

    this.togglePlaying = this.togglePlaying.bind(this);
    this.onStartPlaying = this.onStartPlaying.bind(this);
  }

  onStartPlaying() {
    console.log("Playing")
    this.setState({ playControlImage: "Pause" })
  }

  togglePlaying() {
    availabilityCheck(this.state.streamUrl)
    if (this.state.playing) {
      this.setState({ playing: false, playControlImage: "Play" })
    } else {
      this.setState({ playing: true })
    }
  }

  render() {
    // render the radio
    return (
      <Player
        playing={this.state.playing}
        togglePlaying={this.togglePlaying}
        onStartPlaying={this.onStartPlaying}
        streamUrl={this.state.streamUrl}
        logo={this.state.logo}
        playControlImage={this.state.playControlImage}
      />
    )
  }
}

export default Radio;
