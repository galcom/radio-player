import React from 'react';
import Player from '../Components/Player'
import queryString from 'query-string'
const isReachable = require('is-reachable');

function availabilityCheck(url) {
  isReachable('https://google.com')
  .then(internetStatus => {
    console.log("Internet Is Accessible")
    if (internetStatus){
    } else {
      console.log("Internet Is Not Accessible")
    }
  })
  .catch(error => console.log('Failed to test google. Error: ' + error))
}

class Radio extends React.Component {
  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    this.setState({ streamUrl: values.streamUrl, logo: values.logo })
    availabilityCheck(values.streamUrl)
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
    availabilityCheck(this.state.streamUrl)
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
        logo={this.state.logo}
        playControlImage={this.state.playControlImage}
      />
    )
  }
}

export default Radio;
