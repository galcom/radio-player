import React from 'react';
import './Player.css';
import FilePlayer from 'react-player/lib/players/FilePlayer'

class Player extends React.Component {
    render() {
        return (
            <div>
                <input onClick={() => { this.props.togglePlaying() }} value=">" />
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
        )
    }
}


export default Player;
