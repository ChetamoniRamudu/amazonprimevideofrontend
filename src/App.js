// import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "./components/navreg.js";
import Login from "./components/nav_login.js";
import Populars from "./components/nav_movie.js";
import Latest from "./components/nav_latest.js";
import Favorite from "./components/nav_favorite.js";
import Home from "./components/header.js";
import Navbar from "./components/navbar.js";

function App() {
  return (
    <>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/favorite" exact component={Favorite} />
      <Route path="/latest" exact component={Latest} />
        <Route path="/signin" exact component={Login} />
        <Route path="/signup" exact component={Register} />
        <Route path="/popular" exact component={Populars}/>
      </Switch>
    </>
  );
}
export default App;
