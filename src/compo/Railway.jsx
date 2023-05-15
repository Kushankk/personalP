import React from "react"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Train from "./Train"
import { styled } from "styled-components";


const Desc = styled.div`
    width:200px;
    height:90px;
    padding:20px;
    border-radius:10px;
    bottom:80px;
    right:110px;
    background-color:#da4ea2;
    position:absolute;
    color:white;


    @media only screen and (max-width:768px) {
        
        top:0;
        bottom:0;
        right:0;
        left:0;
        margin:auto;
         
         
       }



    `


const Railway = () =>{

    return (

        <>
        <Canvas>
            <Stage environment="city" intensity={0.6}>
            <Train/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate/>
            



        </Canvas>
        <Desc>
            A Railway Management System build with python and MySQl. Responsible for the booking and cancellation of tickets.

        </Desc>

        </>


        
    )



}
export default Railway