import React from 'react';
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const CarDetails = () => {
    const [carDetails, setCarDetails] = useState({});
    const {carId} = useParams();
    const {user} = useAuth();
    // console.log(carDetails);
    
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
       data.email = user?.email;
       data.productName = carDetails?.name;
       data.description = carDetails?.description;
       data.price = carDetails?.price;
       data.img = carDetails?.img;
      //  console.log(data);
       fetch("http://localhost:5000/addOrders", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
    };

    useEffect(() => {
       fetch(`http://localhost:5000/singleCar/${carId}`)
         .then((res) => res.json())
         .then((data) => {
           setCarDetails(data[0]);
         });
    }, [])

    return (
      <div className="container">
        <h2>YOUR CHOOSE ITEM : {carDetails?.name}</h2>
        <div className="container row">
          <div className="col-md-6 text-start">
            <img style={{ width: "75%" }} src={carDetails?.img} alt="" />
            <h5 className="w-75">{carDetails?.name}</h5>
            <p className="w-75">{carDetails?.description}</p>
            <p className="w-75">${carDetails?.price}</p>
          </div>

          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("address", { required: true })}
                defaultValue=""
                placeholder="Your Address"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("phone", { required: true })}
                defaultValue=""
                placeholder="phone"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                type="number"
                {...register("age", { required: true })}
                defaultValue=""
                placeholder="age"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />

              {/* <input
                {...register("img", { required: true })}
                defaultValue=""
                placeholder="Image url"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              /> */}
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Order Now"
                className="btn btn-success ms-2 w-50"
              />
            </form>
          </div>
        </div>
      </div>
    );
};

export default CarDetails;