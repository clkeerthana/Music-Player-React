import React from "react";
import {  Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import MusicPlayer from "./pages/MusicPlayer";
import Playlist from "./pages/playlist";
import Favourites from "./pages/favourites";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const App=()=>{
  const [favourites,setFavourites]=useState([]);
  return ( 
    <div>
      <Routes>
        {/* Default page - Playlist */}
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="/playlist" element={<Playlist favourites={favourites}/>}/>
        {/* Music player page with query param for song index */}
        <Route path="/player" element={<MusicPlayer favourites={favourites} setFavourites={setFavourites} />} />
        <Route path="/favourites" element={<Favourites favourites={favourites}/>}/>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
      </div>
  );
};
export default App;