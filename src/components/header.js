import React from "react";
import {Link}from "react-router-dom";
import prime from '../images/prime.webp'
import './header.css'
const Homepage=()=>{
    return(
        <div className="homepage">
            <div className="headers">
                <img  className="primeimage" src={prime} alt={"primevideos"}/>
                <Link to="/signin" className="signhome" >Sign In</Link>
            </div>
            <div className="homebottom">
                <div>
                    <h1 className="text">Welcome to Prime Video</h1>
                    <h4 className="text">Join Prime to watch the latest movies<br/> TV  shows and  award-winning Amazon Originals</h4>
                    <button className="text textbtn">Start your 30-day free trial</button>
                    <h6 className=" text"> With select credit or debit cards</h6>

                </div>
            </div>

        </div>
    )
}
export default Homepage