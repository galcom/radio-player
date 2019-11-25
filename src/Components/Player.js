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
      <div id="wrapper" style={colorStyles}>
        <div id="top">
          <img
            src={this.props.logo}
            alt="logo"
            id="logo"
          />
        </div>
        <div id="middle">
          <img
            id="play"
            className={!this.props.playing ? "visible" : "hidden"}
            src="./images/play.gif"
            alt="Play"
            onClick={() => { this.props.togglePlaying() }}
          />
          <div
            id="loading"
            className={this.props.playing && !this.props.ready ? "visible" : "hidden"}
            onClick={() => { this.props.togglePlaying() }}
          />
          <img
            id="pause"
            className={this.props.playing && this.props.ready ? "visible" : "hidden"}
            src="./images/pause.gif"
            alt="Pause"
            onClick={() => { this.props.togglePlaying() }}
          />
          <FilePlayer
            id="audio-wrapper"
            url={this.props.streamUrl}
            playing={this.props.playing}
            config={{
              file: {
                forceAudio: true,
                autoplay: true
              }
            }}
            onReady={() => {
              this.props.onReady()
            }}
            onBuffer={() => {
              this.props.onBuffer()
            }}
          />
        </div>
        <div id="footer" className="contents">
          <span className="text-contents">a <strong>FAITH</strong>TECH product</span>
          <span className="text-contents">hosted by <strong>GALCOM</strong></span>
        </div>
      </div>
    )
  }
}


export default Player;
