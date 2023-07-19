import React, { useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://fastzone-server-site.onrender.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if(result?.[0].role === "admin") {
          Swal.fire({
            icon: 'success',
            title: 'Admin created Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          reset();
        }else {
          Swal.fire({
            showConfirmButton:false,
            title: 'Admin has not been created',
            icon: 'error',
            iconHtml: '&#10060',
            timer:1500
          })
        }
      });
    
  };

  return (
    <div>
      <h4>Create An Admin</h4>
      <div >
      <form style={{maxWidth:'350px'}} className="text-center my-3 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field w-100"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="btn btn-primary mt-2 w-50"
          type="submit"
          value="make Admin"
        />
      </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
