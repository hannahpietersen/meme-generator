import React from "react";

function Navbar(){
    return (
        <nav className='nav'>
        
            <img 
              className="nav-img"
              src='./images/logo.svg' 
              alt="logo" />
       
            <h1 className='logo-name'>Meme Generator</h1>
            
        </nav>
    );
}
export default Navbar;