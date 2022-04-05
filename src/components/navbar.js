import React from "react";
import prime from '../images/prime.webp'
import styles from './navheader.module.css'
const Navbar=()=>{
    return(
        <div className={styles.navheaders}>
                <img  className={styles.primeimagee} src={prime} alt={"primevideos"}/>
    
        </div>
    )
}
export default Navbar