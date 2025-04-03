
import React, { useEffect } from "react";


const SeekBar = ({ audioRef, progress, setProgress }) => {
    useEffect(() => {
        if (!audioRef.current) return;

        const updateProgress = () => {
            if (!audioRef.current||!audioRef.current.duration) return;
            const newProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            console.log("Audio current time:", audioRef.current.currentTime);
            console.log("Audio duration:", audioRef.current.duration);
            console.log("Calculated progress:", newProgress);
            setProgress(newProgress || 0);
        };

        setProgress(0);

        const audio = audioRef.current;
        audio.addEventListener("timeupdate", updateProgress);
    
    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, [audioRef, setProgress]);

    const handleSeek = (e) => {
        if (!audioRef.current) return;
        const seekTime = (e.target.value / 100) * audioRef.current.duration;
        audioRef.current.currentTime = seekTime;
        setProgress(e.target.value);
    };

    return (
        <input type="range" min="0" max="100" value={progress||0} onChange={handleSeek} className="seekbar" />
    );
};

export default SeekBar;
