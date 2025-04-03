
import { useState, useEffect, useRef ,useCallback} from "react";
import { useLocation } from "react-router-dom";
import { FaPlay, FaPause, FaForward, FaBackward, FaHeart } from "react-icons/fa";
import SeekBar from "../components/seekbar";
import Controls from "../components/controls";
import {Link} from "react-router-dom";
import "../styles/MusicPlayer.css";
import "../styles/favourites.css";

const playlist = [
    { name: "Young and Beautiful", src: "audio/Lana_Del_Rey_-_Young_And_Beautiful_CeeNaija.com_.mp3", img: "images/yab.jpg" },
    { name: "Cry for me ", src: "audio/The-Weeknd-Cry-For-Me-(HipHopKit.com).mp3", img: "images/cryforme.jpg" },
    { name: "Despacito", src: "audio/Luis-Fonsi-Ft.-Daddy-Yankee-Despacito.mp3", img: "images/despacito.jpg" },
    { name: "Maand", src: "audio/Maand - (Raag.Fm).mp3", img: "images/maand.jpg" },
    { name: "Nee nange allava", src: "audio/Nange_Allava_Sanjith_Hegde.mp3", img: "images/nee nange allava.jpg" },
    { name: "Jhol", src: "audio/Jhol - Coke Studio Pakistan (pagalall.com).mp3", img: "images/jhol.jpg" }
];

const MusicPlayer = ({ favourites, setFavourites }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const SongIndex = parseInt(queryParams.get("song")) || 0;

    const [currentSongIndex, setCurrentSongIdx] = useState(SongIndex);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isFavourite, setIsFavourite] = useState(favourites.includes(SongIndex));


    const audioRef = useRef(new Audio());

    console.log("Navigated song:", SongIndex);

    useEffect(() => {
        //  Ensure only one song plays at a time
        if (audioRef.current) {
            audioRef.current.pause();
        }

        audioRef.current = new Audio(playlist[currentSongIndex].src);
        audioRef.current.load();
        audioRef.current.play().catch((err) => console.error("Playback error:", err));

        setIsPlaying(true);

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, [currentSongIndex]);

    const togglePlayPause = useCallback(() => {
        if (!audioRef.current) return;
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    },[isPlaying]);

    const nextSong = useCallback(() => {
        let newSongIndex = (currentSongIndex + 1) % playlist.length;
        setCurrentSongIdx(newSongIndex);
    },[currentSongIndex]);

    const prevSong =useCallback(() => {
        let newSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        setCurrentSongIdx(newSongIndex);
    },[currentSongIndex]);
    useEffect(() => {
        setIsFavourite(favourites.includes(currentSongIndex));
    }, [favourites, currentSongIndex]);

    const toggleFavourite = useCallback(() => {
        if (isFavourite) {
            setFavourites(favourites.filter(index => index !== currentSongIndex));
        } else {
            setFavourites([...favourites, currentSongIndex]);
        }
        setIsFavourite(!isFavourite);
    },[isFavourite, currentSongIndex, setFavourites,favourites]);

    return (
        <div className="music-player">
            <Link to="/playlist" className="back-link">Back to Playlist</Link>
            <img src={playlist[currentSongIndex].img} alt="song cover" className="cover-image" />
            <div className="song-info">
                <h2 className="song-title">{playlist[currentSongIndex].name}</h2>
                <div className ="fav-section">
                
                <button className={`heart-btn ${isFavourite ? 'favorite' : ''}`} onClick={toggleFavourite}>
                    <FaHeart />   <span className="fav-text">   Add to your favourites</span>
                </button>
                </div>
                
            </div>

            <SeekBar key={currentSongIndex} audioRef={audioRef} progress={progress} setProgress={setProgress} />

            <Controls
                isPlaying={isPlaying}
                onPlayPause={togglePlayPause}
                onNext={nextSong}
                onPrev={prevSong}
            />
            
        </div>
    );
};

export default MusicPlayer;

