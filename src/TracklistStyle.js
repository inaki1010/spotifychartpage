import React, { useEffect, useState } from 'react';
import axios from "axios";
import GetButton from './Button';
import styled from "styled-components";
const ALBUMS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks";
let i = 0;
const GetTrack = ({item}) =>{
    i = i + 0.5;
    const Span = styled.span`
    margin-top:10px;`
    return <Span>{i}. {item}</Span>
    
}
export default GetTrack;