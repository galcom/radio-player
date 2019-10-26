import React from 'react';
import Player from '../Components/Player'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: true
    };

    this.togglePlaying = this.togglePlaying.bind(this);
  }

  togglePlaying() {
    if (this.state.playing) {
      this.setState({ playing: false })
    } else {
      this.setState({ playing: true })
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
