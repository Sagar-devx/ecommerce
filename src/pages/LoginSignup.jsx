import React, { useState } from "react";
import "../CSS/LoginSignup.css";

export const LoginSignup = () => {
  const [state, setState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      !formData.email ||
      !formData.password ||
      (state === "Sign Up" && !formData.username)
    ) {
      alert("Please fill in all details");
      return;
    }

    const registeredUsers = JSON.parse(
      localStorage.getItem("registered_users") || "{}"
    );

    let userName = "";
    if (state === "Sign Up") {
      userName = formData.username.trim();
      registeredUsers[formData.email.toLowerCase()] = userName;
      localStorage.setItem("registered_users", JSON.stringify(registeredUsers));
    } else {
      userName =
        registeredUsers[formData.email.toLowerCase()] ||
        formData.username ||
        formData.email.split("@")[0];
    }

    localStorage.setItem("user-name", userName);
    alert(`${state} Successful!`);
    window.location.replace("/");
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
              autoComplete="name"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
            autoComplete="email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
        </div>
        <button onClick={handleSubmit}>Continue</button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span onClick={() => setState("Sign Up")}>Click here</span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
