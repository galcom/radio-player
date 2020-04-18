import React from "react";
import "./Player.css";
import Logo from "./Logo";
import Footer from "./Footer";
import PlayerControl from "./PlayerControl";

class Player extends React.Component {
  render() {
    return (
      <div id="wrapper" style={{ backgroundColor: this.props.backgroundColor }}>
        <div id="top">
          <Logo logo={this.props.logo} />
        </div>
        <div id="middle">
          <PlayerControl
            streamUrl={this.props.streamUrl}
            streams={this.props.streams}
            logo={this.props.logo}
            foregroundColor={this.props.foregroundColor}
            // player controls
            isOnline={this.props.isOnline}
            isBroadcasting={this.props.isBroadcasting}
            isPlaying={this.props.isPlaying}
            isReady={this.props.isReady}
            onReady={this.props.onReady}
            onBuffer={this.props.onBuffer}
            togglePlaying={this.props.togglePlaying}
            onError={this.props.onError}
          />
        </div>
        <div id="footer">
          <Footer foregroundColor={this.props.foregroundColor} />
        </div>
      </div>
    );
  }
}

export default Player;
