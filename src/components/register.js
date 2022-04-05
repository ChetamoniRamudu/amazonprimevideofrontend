import React from "react";
import styles from "./register.module.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {
  // let history = useNavigate();
  const [newobject, setnewobject] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    district: "",
    address: "",
    pincode: "",
    state: "",
  });

  // console.log(newobject)

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

    let phone1 = Number(newobject.phone);
    console.log(phone1 * 1);

    if (phone1 * 1 > 0 && Number(newobject.pincode) * 1 > 0) {
      const response = await fetch("https://amazonprimebackend.herokuapp.com/signup", {
        method: "POST",
        body: JSON.stringify(newobject),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await response.json();

      console.log(data);

      if (data.success) {
        localStorage.setItem("token", data.authorization);
        localStorage.setItem("user", JSON.stringify(newobject));

        // history("/")
        window.location.href = "/signin"
      } else {
        console.log(data);
        alert(data.error);
      }
    } else {
      alert("phone or pincode should be number");
    }
  }

  return (
    <section className={styles.reg_page}>
      <div className={styles.left_reg}>
        <div>
          <h1 className="title-login">CapitalMovie</h1>
          <div className="btn-sec">
            <p>Already Have An Account?</p>
            <NavLink className="li" to={"/"}>
              <button className="reg-btn">Login</button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="right-reg">
        <div className="form-reg">
          <h3>REGISTER</h3>
          <form action="" onSubmit={handlesubmit}>
            <div className="division">
              <div className="">
                <div className="field reg-field">
                  <label htmlFor="name">Name </label> <br/>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handlechange}
                    required
                  />
                  <div className="under-line"></div>
                </div>

                <div className="field reg-field">
                  <label htmlFor="phone">Phone </label><br/>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={handlechange}
                  />
                  <div className="under-line"></div>
                </div>

                <div className="field reg-field">
                  <label htmlFor="email">Email </label><br/>
                  <input
                    type="email"
                    id="password"
                    name="email"
                    onChange={handlechange}
                  />
                  <div className="under-line"></div>
                </div>

                <div className="field reg-field">
                  <label htmlFor="password">Password </label><br/>
                  <input
                    id="password"
                    type={"password"}
                    name="password"
                    onChange={handlechange}
                  />
                  <div className="under-line"></div>
                </div>
              </div>

              <div className="">
                <div className="field reg-field">
                  <label htmlFor="state">State </label><br/>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    onChange={handlechange}
                  />
                  <div className="under-line"></div>
                </div>
                <div className="field reg-field">
                  <label htmlFor="district">District </label><br/>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    onChange={handlechange}
                  />
                  <div className="under-line"></div>
                </div>

                <div className="field reg-field">
                  <label htmlFor="address">Address </label><br/>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={handlechange}
                  />
                  <div className="under-line"></div>
                </div>
                <div className="field reg-field">
                  <label htmlFor="pincode">Pincode </label><br/>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    onChange={handlechange}
                  />
                  <div className="under-line"></div>
                </div>
              </div>
            </div>
            <div className="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" required />
              <label htmlFor="checkbox">
                {" "}
                I agree to Terms & Condition receiving marketing and promotional
                materials{" "}
              </label>
            </div>

            <button className="btn-signin">Register</button>
          </form>
        </div>
      </div>
    </section>
  );
}
