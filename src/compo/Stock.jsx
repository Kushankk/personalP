import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"
import Mac from "./Mac"
import { styled } from "styled-components"


const Desc = styled.div`
    width:200px;
    height:130px;
    padding:20px;
    border-radius:10px;
    top:20px;
    right:100px;
    background-color:#da4ea2;
    position:absolute;
    color:white;

    @media only screen and (max-width:768px) {
        
       top:0;
       bottom:0;
       right:0;
       left:0;
       margin:auto;
       height:80px;
       width:250px;
        
        
      }
    
    

`;


const Stock = () =>{

    return (
        <>

        
        <Canvas>
            <Suspense fallback={null}>
                <Stage environment="city" intensity={0.6} >
                <Mac />
                </Stage>
                
                <OrbitControls enableZoom={false} autoRotate/>


            </Suspense>
        </Canvas>

        <Desc>
            A Website that shows the prices of upto 30k stocks and graphs them for your convinience.<hr/>HTML, CSS, Javascript, API, JSON.
        </Desc>
        

        </>



        
    )


}
export default Stock