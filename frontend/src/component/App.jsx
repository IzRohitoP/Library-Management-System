import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function App() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  const apilogin = async (formData) => {
    const data = await axios.post("http://localhost:5000/api/v1/register", {
      userid: formData.userid,
      password: formData.password,
    });
    console.log(data);
  };

  return (
    <div>
      Register User
      <form method="POST" onSubmit={handleSubmit(apilogin)}>
        <input
          {...register("userid", {
            required: "Please enter a user Id",
          })}
        />
        <input
          {...register("password", {
            required: "Please provide a password",
          })}
          type="password"
        />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
}
