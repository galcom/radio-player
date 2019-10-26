import React from 'react';
import './Player.css';
import ReactPlayer from 'react-player'

class Player extends React.Component {
    render() {
        return (
            <div class='PlayerWindow'>
                <input onClick={() => { this.props.togglePlaying() }} value=">" />
                <ReactPlayer
                    url='http://xstreamer.galcom.org:8000/GalcomCanada'
                    playing={this.props.playing}
                    width='100%'
                    height='100%'
                />
            </div>
        )
    }
}


export default Player;
