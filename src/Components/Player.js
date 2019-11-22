import React from 'react';
import './Player.css';
import FilePlayer from 'react-player/lib/players/FilePlayer'


class Player extends React.Component {
  render() {
    // create background & foreground color styles
    const colorStyles = {
      foregroundColor: this.props.foregroundColor,
      backgroundColor: this.props.backgroundColor,
    }

    return (
      <div id="wrapper">
        <div id="top" style={colorStyles}>
          <img
            src={this.props.logo}
            alt="logo"
            id="logo"
          />
        </div>
        <div id="bottom" style={colorStyles}>
            <img
              id="control"
              src={this.props.playControlImage + ".gif"}
              alt="play/pause"
              onClick={() => {
                this.props.togglePlaying()
              }}
            />
            <FilePlayer
                url={this.props.streamUrl}
                playing={this.props.playing}
                config={{
                  file: {
                    forceAudio: true,
                    autoplay: true
                  }
                }}
            />
        </div>
      </div>
    )
  }
}


export default Player;
