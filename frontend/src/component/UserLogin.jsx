import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css"; // Import your CSS stylesheet

export default function UserLogin() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const apilogin = async (formData) => {
    try {
      const data = await fetch("http://localhost:5000/api/v1/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const res = await data.json();

      if (data.ok && res.user.role === "user") {
        navigate("/userhomepage");
      } else if (data.ok) {
        navigate("/adminhomepage");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user-login-container">
      <h2>User Login</h2>
      <form
        className="login-form"
        method="POST"
        onSubmit={handleSubmit(apilogin)}
      >
        <div className="form-group">
          <label htmlFor="userid">User ID</label>
          <input
            {...register("userid", {
              required: "Please enter a user ID",
            })}
            type="text"
            id="userid"
            name="userid"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            {...register("password", {
              required: "Please provide a password",
            })}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
