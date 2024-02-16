import React, { useState } from "react";
import "../styling/login.css";
import { useNavigate } from "react-router-dom";

function LoginUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [checked, setChecked] = useState(true);

  function handleCheckChange(event) {
    event.target.checked = false;
    setChecked(!checked);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Authentication tokens
  const authTokens = [
    {
    username: "sam@gmail.com",
    password: "sams"
  },
  {
    username: "naomi@gmail.com",
    password: "naomis"
  },
  {
    username: "victor@gmail.com",
    password: "victors"
  }]


  function handleSubmit(e) {
    e.preventDefault();
    // Authentication condition
    if (authTokens.some(token => token.password === formData.password)){
      navigate("/");    
    }else{
      alert("Wrong PassWord!!! Try Again!")
    }  
  }


  return (
    <div className="login-wrapper">
      <form
        id="login-form"
        action=""
        className="animate"
        onSubmit={handleSubmit}
      >
        <div id="image-container">
          <img
            id="login-avatar"
            alt="login-avatar"
            src={require("../images/logo.png")}
          />
        </div>
        <div className="container">
          <h1>Log In</h1>
          <hr />
          <label>
            <p>
              <strong>Username</strong>
            </p>
            <input
              placeholder="Enter Password"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <p>
              <strong>Password</strong>
            </p>
            <input
              placeholder="Enter Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <div>
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
          </div>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckChange}
              name="rememberme"
            />
            Remember me
          </label>
          <span className="passwd">
            Forgot <a href="#">password?</a>
          </span>
          <p>
            <a href="#">Register here</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginUser;
