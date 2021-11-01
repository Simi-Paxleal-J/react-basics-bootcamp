import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


function First ()
{
return(
    
    <>
    <NavBar/>
    <h2 style = {{fontsize: "20px", color: "red"}}>First Component</h2>
    </>
)
}
function Second ()
{
return(
    <>
    <h2 style = {{fontsize: "20px", color: "black"}}>Second Component</h2>
    <Footer />
    </>
)
}

export {First, Second};