import React from 'react';
import Player from '../Components/Player'
import queryString from 'query-string'
const isReachable = require('is-reachable');

function availabilityCheck(url) {
  isReachable('https://google.com:443')
  .then(internetStatus => {
    console.log("Internet Is Accessible")
    if (internetStatus){
    //   isReachable(url)
    //   .then(streamStatus => {
    //     if (streamStatus){
    //       console.log("Stream is Available")
    //     } else {
    //       console.log("Stream is Broken")
    //     }
    //   })
    //   .catch(error => console.log('Failed to test stream. Error: ' + error))
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

        const play = "&#9654;"
        const pause = "&#9208;"
        const loading = ""

        this.state = {
            playing: true,
            playbackIcon: loading,
            streamUrl: this.streamUrl,
            logo: this.logo
        };
        console.log("stream: " + this.streamUrl)

        this.togglePlaying = this.togglePlaying.bind(this);
        this.onStartPlaying = this.onStartPlaying.bind(this);
    }

    onStartPlaying() {
        this.setState({ playbackIcon: this.pause })
    }

    togglePlaying() {
      availabilityCheck(this.state.streamUrl)
        if (this.state.playing) {
            this.setState({ playing: false, playbackIcon: this.play })
        } else {
            this.setState({ playing: true, playbackIcon: this.pause })
        }
    }

    render() {
        return (
            <Player
                playing={this.state.playing}
                togglePlaying={this.togglePlaying}
                onStartPlaying={this.onStartPlaying}
                streamUrl={this.state.streamUrl}
            />
        )
    }
}

export default Radio;
