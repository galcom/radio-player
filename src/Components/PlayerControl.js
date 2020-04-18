import React from "react";
import "./PlayerControl.css";
import FilePlayer from "react-player/lib/players/FilePlayer";

function PlayerControl(props) {
  return (
    <React.Fragment>
      <img
        id="play"
        className={props.isPlaying ? "hidden" : "visible"}
        src="./images/play.gif"
        alt="Play"
        onClick={() => {
          props.togglePlaying();
        }}
      />
      <div
        id="loading"
        style={{ borderRight: "30px solid " + props.foregroundColor }}
        className={props.isPlaying && !props.isReady ? "visible" : "hidden"}
        onClick={() => {
          props.togglePlaying();
        }}
      />
      <img
        id="pause"
        className={props.isPlaying && props.isReady ? "visible" : "hidden"}
        src="./images/pause.gif"
        alt="Pause"
        onClick={() => {
          props.togglePlaying();
        }}
      />
      <FilePlayer
        id="audio-wrapper"
        url={props.streamUrl}
        playing={props.isPlaying}
        config={{
          file: {
            forceAudio: true,
            autoplay: true,
          },
        }}
        onReady={() => {
          props.onReady();
        }}
        onBuffer={() => {
          props.onBuffer();
        }}
        onError={() => {
          props.onError();
        }}
      />
    </React.Fragment>
  );
}

export default PlayerControl;
