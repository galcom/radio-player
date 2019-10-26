import React from 'react';
import './Player.css';
import ReactPlayer from 'react-player'


function Player(props) {
  return (
  <div class='PlayerWindow'>
    <ReactPlayer url='http://xstreamer.galcom.org:8000/GalcomCanada' playing controls="true" width='100%' height='100%'/>
  </div>
);
}


export default Player;
