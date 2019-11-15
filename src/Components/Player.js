import React from 'react';
import './Player.css';
import FilePlayer from 'react-player/lib/players/FilePlayer'


class Player extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <div id="top">
                  <img
                    src={"logos/" + this.props.logo}
                    alt="logo"
                    id="logo"
                  />
                </div>
                <div id="bottom">
                    <img
                      src={this.props.playControlImage + ".gif"}
                      alt="play/pause"
                      onClick={() => { this.props.togglePlaying() }}
                      id="control"
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
                        onPlay={() => { this.props.onStartPlaying() }}
                    />
                </div>
            </div>
        )
    }
}


export default Player;
