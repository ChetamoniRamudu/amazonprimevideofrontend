import React, { useState } from "react";
import { NavLink ,useHistory} from "react-router-dom";
import "./login.css";
import Navbar  from "./navbar";
export default function Login() {
   let history = useHistory();

  const [newobject, setnewobject] = useState({ email: "", password: "" });
  const [iseye, setiseye] = useState(false);

  function handlechange(e) {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setnewobject({ ...newobject, [e.target.name]: e.target.value });
    // console.log(newobject)
  }

  async function handlesubmit(e) {
    e.preventDefault();
    console.log(newobject);
    let f = false;
    for (let field in newobject) {
      if (!newobject[field]) {
        alert("plese fill all fields");
        f = true;
        break;
      }
    }
    if (f) {
      return;
    }

    const response = await fetch("https://amazonprimebackend.herokuapp.com/signin", {
      method: "POST",
      body: JSON.stringify(newobject),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();

    console.log(data);

    if (data.success) {
      const token = data.token
      const userData =data.User
      
      
      localStorage.setItem('token',token)
      localStorage.setItem('user',userData)
      window.location.href = "/popular"

      // alert("rigisterd successfully")

     // history("/popular")
    } else {
      console.log(data);
      alert(data.error);
    }
  }

  return (
    <section className="login-page">
      <div className="left-login">
        <div className="content">
          <h1 className="title-login">Amazon Primevideos</h1>
          <div className="btn-sec">
            <p className="btntitle">Don't Have An Account?</p>
            <NavLink className="li" to={"/signup"}>
              <button className="reg-btn">Register</button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="right-login">
        <div className="form-login">
          <h3>SIGN IN</h3>
          <form action="" onSubmit={handlesubmit}>
            <div className="field">
              <label htmlFor="Email/phone">Mobile/Email :</label><br/>
              <input
                type="text"
                id="Email/phone"
                onChange={handlechange}
                name="email"
              />
              <div className="under-line"></div>
            </div>
            <div className="field">
              <label htmlFor="password">Password : </label><br/>
              <input
                type={!iseye ? "password" : ""}
                id="password"
                onChange={handlechange}
                name="password"
              />
              <i
                className="fa fa-eye"
                onClick={() => {
                  setiseye(!iseye);
                }}
              >
                {" "}
              </i>
              <div className="under-line"></div>
              <div className="forgot">
                <p>Forgot Password?</p>
              </div>
            </div>

            <button className="btn-signin">Sign In</button>
          </form>
        </div>
      </div>
    </section>
  );
}
