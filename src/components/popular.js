import React, { useEffect, useState } from "react";
import "./popular.css"
export default function Popular() {
  const [popular, setpopular] = useState([]);
  //const [currentmovie,setCurrentmovie]=useState(null)
 // const [item,setItem]=useState(null)
  const [read,setread]=useState(false)
  function getToken(){
    if(window.localStorage){
      return localStorage.getItem("token")
    }
    return ""
  }
  const handleClick=async (movie)=>{
    console.log(movie)
    //setCurrentmovie(movie)
   // setItem(movie)
    //console.log(item)
    const { title, vote_average, release_date, poster_paths, overview } =movie
    // const status="selected"
    try {
      //const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7I…E0Mn0.m0mpQizv_ksOYEv736oemlwfcPnDSf6xJMBzt_M06IM'
      const token=window.localStorage.getItem('token')
      const movie_name=title;
      const rating=vote_average;
      const released=release_date;
      const movie_path=poster_paths;
      const description=overview
      const selected="favorite"

     const response= await fetch("https://amazonprimebackend.herokuapp.com/discover/favorite",{
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `${getToken()}`
      },
      body:JSON.stringify({
        movie_name,
        rating,
        released,
        movie_path,
        description,
        selected,
      })
   })
   const data=await response.json()
   console.log(data)
   if(!data.status==200){
    const error = new Error(response.error);
    throw error;

   } 
      
    } catch (err) {
      console.log(err)
      
    }

  }
  useEffect(() => {
    fetch("https://amazonprimebackend.herokuapp.com/discover/popular", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.movieinformation);
        setpopular(data.movieinformation);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="allcards">
      {popular.map((movie) => {
        const { title, vote_average, release_date, poster_paths, overview } =
          movie;
        return (
          <div className="card">
            <img className="cardimage" src={poster_paths} alt={title} />
            <div className="cardtitle_rating">
              <h6 className="moviename">{title}</h6>
              <h6 className="rating">Rating:{vote_average}</h6>
            </div>
            <span className="span">
            <h6 className="cardreleasedate">Release:{release_date}</h6>
            <button className="btn" onClick={()=>handleClick(movie)} >Favorite</button>
            </span>
            {/* <p className="cardoverview">Overview :{overview}</p> */}
            <p> <span>{read? overview : `${overview.substring(0,100)}...`}
            <button className='pbtn' onClick={()=>setread(!read)}>{read? "showless" : "showmore"}</button>
            </span>
            </p>
          </div>
        );
      })}
    </section>
  );
}
