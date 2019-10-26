import React from 'react';
import './Player.css';
import ReactPlayer from 'react-player'


function Player(props) {
  return <ReactPlayer url='http://xstreamer.galcom.org:8000/GalcomCanada' playing controls="true"/>
}

export default Player;
