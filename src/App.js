import {useEffect, useState} from "react";
import './App.css';
import GetButton from "./Button";
import SpotifyGetAlbums from "./SpotifyGetAlbums";
import styled from "styled-components";
import SpotifyGetAlbums2 from "./TracklistStyle";
function App() {
  const CLIENT_ID = "4feabad7e22a45cd8cb7859c09d7230a"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const SCOPE = "user-top-read"
  const [token, setToken] = useState("")
  const [hash, setHash] = useState(window.location.hash)
  
  const clearStorage = () => {
    window.localStorage.clear();
    
  }
  useEffect(  () => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if(!token && hash){
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
      setToken(token)
    }
    

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify</h1>
        
        <a  onClick={clearStorage} href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}`}><GetButton text = "Login with Spotify"></GetButton></a>
        <br></br>
        {localStorage.getItem("token") && (
          <SpotifyGetAlbums></SpotifyGetAlbums>
        )}
        
      </header>
    </div>
    
  );
}

export default App;
