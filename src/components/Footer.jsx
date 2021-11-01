import React,{useState} from "react";
import styles from "./footer.module.css";

function Footer(){
    const companyName = "ShapeAI";
    //const counter = 0;
    //Use state

    const[counter, setCounter] = useState(0);

    return (
        <>
        <button onClick={() => setCounter(counter + 1)}> Click me to add +1 </button>
        <h1 className ={styles}>Footer {counter}</h1>
        <b className = {styles}>{companyName}</b>
        </>
    )
}
export default Footer;