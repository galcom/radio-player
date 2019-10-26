import React from 'react';
import Player from '../Components/Player'
import queryString from 'query-string'
const isReachable = require('is-reachable');

function availabilityCheck() {
  isReachable('https://google.com:443')
    .then(internetStatus => {
      if (internetStatus) {
        console.log("Internet Is Accessible")
        isReachable('https://google.com:443')
          .then(streamStatus => {
            if (streamStatus) {
              console.log("Stream is Available")
            } else {
              console.log("Stream is Broken")
            }
          })
          .catch(error => console.log('Failed to test stream. Error: ' + error))
      } else {
        console.log("Internet Is Not Accessible")
      }
    })
    .catch(error => console.log('Failed to test google. Error: ' + error))
}
availabilityCheck()

class Radio extends React.Component {
  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    this.setState({ streamUrl: values.streamUrl, logo: values.logo })
  }

  constructor(props) {
    super(props);

    this.state = {
      playing: true,
      playControlImage: "Play",
      streamUrl: this.streamUrl,
      logo: this.logo
    };
    console.log("stream: " + this.streamUrl)
    console.log("playing: " + this.state.playing)

    this.togglePlaying = this.togglePlaying.bind(this);
    this.onStartPlaying = this.onStartPlaying.bind(this);
  }

  onStartPlaying() {
    console.log("playing")
    this.setState({ playControlImage: "Pause" })
  }

  togglePlaying() {
    if (this.state.playing) {
      this.setState({ playing: false, playControlImage: "Play" })
    } else {
      this.setState({ playing: true })
    }
  }

  render() {
    return (
      <Player
        playing={this.state.playing}
        togglePlaying={this.togglePlaying}
        onStartPlaying={this.onStartPlaying}
        streamUrl={this.state.streamUrl}
        playControlImage={this.state.playControlImage}
      />
    )
  }
}

export default Radio;
