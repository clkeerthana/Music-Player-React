import React from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Controls = ({ isPlaying, onPlayPause, onNext, onPrev }) => {
  return (
    <div className="controls">
      <button onClick={onPrev}><FaBackward /></button>
      <button onClick={onPlayPause}>{isPlaying ? <FaPause /> : <FaPlay />}</button>
      <button onClick={onNext}><FaForward /></button>
    </div>
  );
};

export default Controls;
