import React from 'react';
import { useForm } from "react-hook-form";


const AddReview = () => {
const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm();
const onSubmit = (data) => console.log(data);


return (
  <div className="container">
    <h2>Write down your comment</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto ">
      <input defaultValue="Name" {...register("customerName")} />
      <br />
      <input {...register("comment", { required: true })} />
      <br />
      {errors.exampleRequired && <span>This field is required</span>}

      <input className="" type="submit" />
    </form>
  </div>
);

};

export default AddReview;