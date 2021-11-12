import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import Rating from "react-rating";



const AddReview = () => {
 const { register, handleSubmit, watch, errors } = useForm();
  const { user } = useAuth();
  // console.log(user)

  const onSubmit = (data) => {
    // console.log(data);
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    
  };
  return (
    <div>
      <h1>Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="customerName"
          value={user?.displayName}
          {...register("customerName", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />
        <input
          className="input-field"
          type="number"
          placeholder="Give a rating between 0 to 5"
          {...register("stars", { min: 0, max: 5, required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );


};

export default AddReview;

