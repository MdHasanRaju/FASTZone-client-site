import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Rating from "react-rating";
import swal from "sweetalert";

const AddReview = () => {
  const { register, handleSubmit, watch, errors, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    fetch("https://protected-stream-32771.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal("Thanks!", "For Your Comments", "success");
          reset();
        }
      });
  };
  return (
    <div>
      <h1 className="text-primary">Review</h1>
      <div>
      <form className="mx-auto"style={{maxWidth:"350px"}} onSubmit={handleSubmit(onSubmit)}>
        <input className="w-100" {...register("img")} placeholder="Your img Url" required />
        <br />
        <input

          className="input-field w-100"
          name="customerName"
          value={user?.displayName}
          {...register("customerName", { required: true })}
        />
        <br />
        <input

          className="input-field w-100"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input

          className="input-field w-100"
          name="comments"
          placeholder="Type Your Comment"
          {...register("comments", { required: true })}
        />
        <br />
        <input

          className="input-field w-100"
          type="number"
          placeholder="Give A Rating (0 to 5)"
          {...register("stars", { min: 0, max: 5, required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-primary text-light mt-3 px-5 w-75 "
          type="submit"
          value="Send"
        />
      </form>
      </div>
    </div>
  );
};

export default AddReview;
