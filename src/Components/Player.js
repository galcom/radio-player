import React from 'react';
import './Player.css';
import FilePlayer from 'react-player/lib/players/FilePlayer'


class Player extends React.Component {
  render() {
    return (
      <div
        id="wrapper"
        style={{ "background-color": this.props.backgroundColor }}
      >
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
            style={{ "border-right": "30px solid " + this.props.foregroundColor }}
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
        <div
          id="footer"
          style= {{
            "color": this.props.foregroundColor,
            "opacity": 0.5,
          }}
          className="contents"
        >
          <span className="text-contents">
            a <a href="https://faithtech.com/"><strong>FAITH</strong>TECH</a> product
          </span>
          <span className="text-contents">
            hosted by <strong><a href="http://www.galcom.org/">GALCOM</a></strong>
          </span>
        </div>
      </div>
    )
  }
}


export default Player;
