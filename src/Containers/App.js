import React from 'react';
import Player from '../Components/Player'


class App extends React.Component {
  constructor(props) {
    super(props);

    const play = "&#9654;"
    const pause = "&#9208;"

    this.state = {
      playing: true,
      playbackIcon: play
    };

    this.togglePlaying = this.togglePlaying.bind(this);
  }

  togglePlaying() {
    if (this.state.playing) {
      this.setState({ playing: false, playbackIcon: this.pause })
    } else {
      this.setState({ playing: true, playbackIcon: this.play })
    }
  }

  render() {
    return (
      <Player
        playing={this.state.playing}
        togglePlaying={this.togglePlaying}
      />
    )
  }
}

export default App;
