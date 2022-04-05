import React from "react";
import Nav from './navbar.js'
import {Link}from "react-router-dom";
import prime from '../images/prime.webp'
import styles from './movieheader.module.css'
const Capi=()=>{
    return(

            <div className={styles.header}>
                <img  className={styles.primeimageee} src={prime} alt={"primevideos"}/>
    
        
            <ul className={styles.list}>
            <Link to="/popular"  className={styles.list_element}>Popular Movies</Link>
            <Link to="/latest" className={styles.list_element}>Latest Movies</Link>
            <Link to="/favorite" className={styles.list_element}>Favourite Movies</Link>
            <Link to="/signin" className={styles.list_element}>Sign Out</Link>
        

            </ul>
            
        </div>
    )
}
export default Capi