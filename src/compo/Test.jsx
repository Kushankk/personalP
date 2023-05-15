import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react"
import { styled } from "styled-components"
import { BoxGeometry, MeshStandardMaterial } from "three";
import Shiba from "./Shiba"
import Train from "./Train"


const Container = styled.div`

    height:100vh;
    width: 100%;
    scroll-snap-align:center;

`;

const Test = () =>{

    return(
       <Container>
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1} />
            
            

           <Train />
                

           
            
            
            

        </Canvas>


       </Container>
    )
}
export default Test