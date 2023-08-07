import React from 'react';
import styled from "styled-components";


const GetButton = ({text, onClick}) =>{
    
    const Button = styled.button`
  position: relative;
  background-color: #1DB954;
  border: none;
  font-size: 28px;
  border-radius: 25px;
  color: #FFFFFF;
  padding: 20px;
  width: 200px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration:none;
  overflow: hidden;
  cursor: pointer;
  font-family: 'Cabin', sans-serif;
  &:hover{
    background-color:#147d39;}
    `;
    

    
    return <Button onClick={onClick}>{text}</Button>
    
}
export default GetButton;