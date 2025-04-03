import React from "react";
import { Link } from "react-router-dom";
import "../styles/favourites.css";
import Playlist from "./playlist.jsx";
import { useMemo } from "react";

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
];


const Favourites = ({ favourites }) => {
    console.log("Favourites:", favourites);
    const favouriteSongs=useMemo(()=>{
      return favourites.map((index)=>playlist[index]);

    },[favourites]);
  return (
    <div className="favorites-page">
        <Link to="/playlist" className="back-to-playlist">Back to Playlist</Link>
      <h1>Favorite Songs</h1>
      <ul>
        {favouriteSongs.length === 0 ? (
          <p>No favorite songs yet.</p>
        ) : (
          favourites.map((index) => (
            <li key={index} className="favorite-item">
              <img src={playlist[index].img} alt={playlist[index].name} className="favorite-cover" />
              <Link to={`/player?song=${index}`} className="song-link">{playlist[index].name}</Link>
            </li>
          ))
        )}
      </ul>
      
    </div>
  );
};

export default Favourites;
