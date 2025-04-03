import React from "react";
import {Link} from "react-router-dom";

import "../styles/playlist.css";

const playlist=[
  {name:"Young and Beautiful", 
  src:"audio/Lana_Del_Rey_-_Young_And_Beautiful_CeeNaija.com_.mp3",
  img:"images/yab.jpg"},

  {name:"Cry for me ", 
  src:"audio/The-Weeknd-Cry-For-Me-(HipHopKit.com).mp3",
  img: "images/cryforme.jpg"},

  {name:"Despacito",
  src:"audio/Luis-Fonsi-Ft.-Daddy-Yankee-Despacito.mp3",
  img:"images/despacito.jpg"},

  {name:"Maand",
  src:"audio/Maand - (Raag.Fm).mp3",
  img:"images/maand.jpg"
  },
  {name:"Nee nange allava",
  src:"audio/Nange_Allava_Sanjith_Hegde.mp3",
  img:"images/nee nange allava.jpg"
  },
  {name:"Jhol",
  src:"audio/Jhol - Coke Studio Pakistan (pagalall.com).mp3",
  img:"images/jhol.jpg"
  }
]
const Playlist = () => {
    return (
      <div className="playlist-page">
        <h1>Playlist</h1>
        <div className="top-links">
        {/* Link to the Favourites Page */}
        <div className="fav-div">
        <Link to="/favourites" className="fav-link">💖View your Favourites</Link>
        </div>
        <div className="logout-div">
        <Link to="/login" className="logout-link">Logout</Link>
        </div>
        </div>
        <ul>
          {playlist.map((song, index) => (
            <li key={index} className="playlist-item">
                <img src={song.img} alt={song.name} className="playlist-cover" />
            <Link to={`/player?song=${index}`} className="song-link">
            {song.name}
              
              
          
            </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default Playlist;