import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from "styled-components";
import GetButton from './Button';
import GetTrack from './TracklistStyle';
const ALBUMS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks";

const SpotifyGetAlbums = () =>{
    const [accessToken, setAccessToken] = useState("");
    const [data, setData] = useState({});
    
    useEffect(() => {
        if(localStorage.getItem("token")){
            setAccessToken(localStorage.getItem("token"));
        }
    },[])

    const handleGetTopTracks = () => {
        axios.get(ALBUMS_ENDPOINT, {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        }).then(response => {
            setData(response.data);
        }).catch(error => {
            console.log('que');
        });

    }
    
    return <><GetButton text="Get Top Tracks" onClick={handleGetTopTracks}></GetButton>
    {data?.items ? data.items.map((item) => <GetTrack item={item.name}></GetTrack>) : null}
    </>
}
export default SpotifyGetAlbums;