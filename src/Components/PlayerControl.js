import React from "react";
import "./PlayerControl.css";
import FilePlayer from "react-player/lib/players/FilePlayer";

function PlayerControl(props) {
  return (
    <React.Fragment>
	   <div> {props.streamUrl == null ? "No station given or station not found" :""} </div>
      <img
        id="play"
        className={props.streamUrl == null || props.isPlaying ? "hidden" : "visible"}
        src="./images/play.gif"
        alt="Play"
        onClick={() => {
          props.togglePlaying();
        }}
      />
      {/* If we will use loading-ripple, below comment could be deleted 
        <div
        id="loading"
        style={{ borderRight: "30px solid " + props.foregroundColor }}
        className={props.isPlaying && !props.isReady ? "visible" : "hidden"}
        onClick={() => {
          props.togglePlaying();
        }}
      /> */}
      <div 
        id="loading-ripple"
        className={props.isPlaying && !props.isReady ? "visible" : "hidden"}
        onClick={() => {
          props.togglePlaying();
        }}
      >
        <div
          style={{ border: "6px solid " + props.foregroundColor }}
         />
        <div
          style={{ border: "6px solid " + props.foregroundColor }}
         />
      </div>
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
        onError={props.onError}
        //onError={(error) => { props.onError(error); }}
      />
    </React.Fragment>
  );
}

export default PlayerControl;
