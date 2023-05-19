import React from "react";
import logo from "../images/logo.png"




const Navbar = () =>{

    return(
        <div className="Navbar">
            <div className="InnerNavbar">
                <div className="Links">
                    <img className="logo" src={logo}/>
                    <ul className="Navigators">
                        {/* <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li> */}
                    </ul>



                </div>
            
            
            </div>
            
        </div>

    
    )



}
export default Navbar