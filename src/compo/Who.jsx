import React from "react";
import '../index.css'
import { styled } from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BoxGeometry, MeshStandardMaterial } from "three";
import Cube from "./Cube"

const Left = styled.div`
    flex:1;

    @media only screen and (max-width:768px) {
        display:none;
        
      }
    
   



`;

const Right = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:20px;

    @media only screen and (max-width:768px) {
        align-items:center;
        text-align:center;
        
      }
    


`;

const Name = styled.h1`
    font-size:74px;

    @media only screen and (max-width:768px) {
        font-size:60px
        
      }
    




`;

const Whatdo = styled.div`
    display:flex;
    align-items:center;
    gap:10px;

    @media only screen and (max-width:768px) {
        font-size:10px;
        
      }
    

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
    font-size:20px
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






const Who = () =>{

    return(
        <div className="HeroWho" >

            <div className="Hero1Who">
               <Left name="who">
                    <Canvas camera={{fov:25,position:[6,6,6]}}>
                    <OrbitControls enableZoom={false} autoRotate/>
                
                        <Cube/>



                    </Canvas>

               </Left>
    
               <Right>
               <Name>Something About Me.</Name>
                    <Whatdo>
                        <Line src="src/images/line.png"/>
                        <Subtitle>React, Npm, HTML, CSS, Javascript, Java, Python, C, MySQL, Git, Bootstrap, Pandas</Subtitle>
                    </Whatdo>
                    <Desc>
                        I am a 2nd Year Computer Science Student at University of Victoria.Welcome to my personal portfolio website! My name is 
                        Kushank, and I am a software developer with a passion for creating innovative solutions to complex problems. I specialize in languages like
                        HTML, CSS, Javascript, JSON, JSX, React[Framerwork], Bootstrap[Framework] Python, Java, C, MySql. I also have strong grasp of libraries such as 3js, Pandas and Numpy.


                     </Desc>
                    <Button>See My Work</Button>
                
               </Right>
            </div>
        
        
        </div>

    
    )



}
export default Who