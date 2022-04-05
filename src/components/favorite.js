import React, { useEffect, useState } from "react";
import "./popular.css"
export default function Favoriteget() {
  const [fav, setfav] = useState([]);
  const [read,setread]=useState(false)
  function getToken(){
    if(window.localStorage){
      return localStorage.getItem("token")
    }
    return ""
  }

      const token=window.localStorage.getItem('token')
    
  useEffect(() => {
    fetch("https://amazonprimebackend.herokuapp.com/discover/favorite", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `${getToken()}`

      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.neworder);
        setfav(data.neworder);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="allcards">
      {fav.map((movie) => {
        const { movie_name,rating,released,selected,description,movie_path } =
          movie;
        return (
          <div className="card">
            <img className="cardimage" src={movie_path} alt={movie_name} />
            <div className="cardtitle_rating">
              <h6 className="moviename">{movie_name}</h6>
              <h6 className="rating">Rating:{rating}</h6>
            </div>
            <span className="span">
            <h6 className="cardreleasedate">Release:{released}</h6>
            <button className="btn" >Favorite</button>
            </span>
            {/* <p className="cardoverview">Overview :{overview}</p> */}
            <p> <span>{read? description : `${description.substring(0,100)}...`} 
             <button className='pbtn' onClick={()=>setread(!read)}>{read? "showless" : "showmore"}</button> 
         </span> 
            </p>
          </div>
        );
      })}
    </section>
  );
}
