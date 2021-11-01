import React from "react";
import styles from "./navbar.module.css";

function NavBar(props){

    return (
        <>
        <h1 className = {styles.text}>NavBar</h1>
        <h1 className = {styles.name1}>{props.name}</h1>
        </>
    )
}
export default NavBar;