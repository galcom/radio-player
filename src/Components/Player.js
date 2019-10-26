import React from 'react';
import './Player.css';
import FilePlayer from 'react-player/lib/players/FilePlayer'
import { Image } from 'react-bootstrap'

class Player extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <div id="logo"><Image src='FaithTechRadio.png' alt="logo" fluid /></div>
                <div id="control">
                    <Image
                        src={this.props.playControlImage + ".gif"}
                        alt="play/pause"
                        onClick={() => { this.props.togglePlaying() }}
                        className="controlButton"
                        fluid
                    />
                    <FilePlayer
                        url={this.props.streamUrl} //http://xstreamer.galcom.org:8000/GalcomCanada
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
