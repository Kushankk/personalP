import React from "react";
import '../index.css'
import Navbar from "./Navbar";
import { styled } from "styled-components";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Sphere } from "react-simple-maps";
import { SphereGeometry } from "three";
import { animateScroll } from 'react-scroll';
import Who from "./Who"



const Left = styled.div`
    flex:2;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:20px;

    @media only screen and (max-width:768px) {
      flex:1;
      align-items:center;
      justify-content:center;
      
      
      
    }
  




`;

const Right = styled.div`
    flex:3;
    position:relative;

    @media only screen and (max-width:768px) {
      flex:1;
      width:100%;
      
    }
  

`;

const Name = styled.h1`
    font-size:74px;

    @media only screen and (max-width:768px) {
      text-align:center;
      margin-top:0px;
      margin-bottom :0px;
      font-size:65px

      
    }
  




`;

const Whatdo = styled.div`
    display:flex;
    align-items:center;
    gap:10px;

`;

const Line = styled.img`
    height:5px;


`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

`;

const Img =styled.img`

  width:800px;
  height:600px;
  object-fit: contain;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate{

    to{
        transform: translateY(30px)
    }

  }

  @media only screen and (max-width:768px) {
    width:300px;
    height:300px;
    
  }




`;







const Hero = () =>{

    return(
        <div className="Hero">
            <Navbar />
            <div className="Hero1">
               <Left>
                    <Name>Hey, I am Kushank Virdi</Name>
                    <Whatdo>
                        <Line src="./src/images/line.png"/>
                        <Subtitle>Software/Web Developer</Subtitle>
                    </Whatdo>
                    <Desc>
                        Welcome to my Personal Portfolio, I am a Web/Software Developer. This is a Single Page Website so Please Scroll down till the end to know more about me.
                     </Desc>
                    <Button onClick={() => {
                      animateScroll.scrollTo(200, {
                      duration: 500,
                      delay: 0,
                      smooth: 'easeInOutQuart'});}}>
                      Scroll Down</Button>



               </Left>
               <Right>
                  <Canvas camera={{fov:25,position:[5,5,5]}}>
                  <OrbitControls enableZoom={false}/>
                  <ambientLight intensity={1}/>
                  <directionalLight position={[3,2,1]}/>
                    <mesh>

                      <sphereGeometry args={[1.5,100,200]} scale={1} />
                      <MeshDistortMaterial attach="material" distort={0.5} speed={2} color={"purple"}/>

                    </mesh>
                  


                  </Canvas>
                  <Img src="./src/images/temp.png" alt="Image is Here" />
                
               </Right>
            </div>
        
        
        </div>

    
    )



}
export default Hero