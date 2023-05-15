import React, { useState } from "react";
import { styled } from "styled-components";
import Bitcoin from "./Bitcoin"
import { BoxGeometry, MeshStandardMaterial } from "three";
import Bitcoinn from "./Bitcoin"
import Shiba from "./Shiba"
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Railway from "./Railway";
import Tindog from "./Tindog"
import Stock from "./Stock";


const Section = styled.div`

    height:100vh;
    scroll-snap-align:center;
    display:flex;
    justify-content:center;
    position: relative;
    color: black;
    font-size: 14px;
    font-weight: 300;




`;

const Conatiner = styled.div`

    width:1400px;
    display:flex;
    justify-content:space-between;

    @media only screen and (max-width:768px) {
        width:100%;
        flex-direction:column;
        
      }
    



`;

const Left = styled.div`

    flex:1;
    display:flex;
    align-items:center;

    @media only screen and (max-width:768px) {
        padding:20px;
        justify-content:center;
        
      }
    



`;

const List = styled.ul`

    list-style:none;
    display:flex;
    flex-direction:column;
    gap:30px;


`;

const ListI = styled.li`
    font-size:60px;
    font-weight:bold;
    cursor:pointer;
    color:transparent;
    -webkit-text-stroke: 1px white;
    position:relative;

    &::after {
       content:"${(props) => props.text}";
       position: absolute;
       top:0;
       left:0;
       color: pink;
       width: 0px;
       overflow: hidden;
       white-space: nowrap;

    }
    &:hover{
        &::after {
            animation: moveText 0.5s linear both;
            @keyframes moveText {
              to {
                width: 100%;
              }
            }
          }
        }

    @media only screen and (max-width:768px) {
        font-size:24px;
        
        }
        

    

`;

const Right = styled.div`

    flex:1;
    



`;

const data = [
    "Stock Price Analyzer",
    "Railway Management",
    "Tindog",
  ];
    
    
    
    


const Work = () =>{

    const [work,setWork] = useState("Stock Price Analyzer")

    return(
        <Section>
            <Conatiner>
                <Left>
                    <List>
                    {data.map((item) => (
            <ListI key={item} text={item} onClick={()=>setWork(item)}>{item}</ListI>
            ))}
                    </List>
                </Left>
                <Right>
                {work === "Stock Price Analyzer" ? (<Stock/>): work ==="Railway Management" ? (<Railway/>) : (<Tindog/>)}
                </Right>


            </Conatiner>

        </Section>

    
    )



}
export default Work