import { OrbitControls, Stage } from "@react-three/drei"
import React from "react"
import Shiba from "./Shiba"
import { Canvas } from "@react-three/fiber";
import { styled } from "styled-components";


const Desc = styled.div`
    width:200px;
    height:100px;
    padding:20px;
    border-radius:10px;
    top:130px;
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


const Tindog = () =>{

    return (
        <>
        <Canvas>
            
            <Shiba/>
            
            <OrbitControls enableZoom={false} autoRotate/>



        </Canvas>

        <Desc>
            A Frontend Dog Dating Website, to find the perfect match for your dog.<br/><hr/>
            HTML, CSS, Javascript, Bootstrap
        </Desc>
        </>


        
    )


}
export default Tindog