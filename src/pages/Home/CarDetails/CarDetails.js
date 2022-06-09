import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

const CarDetails = () => {
  const [carDetails, setCarDetails] = useState({});
  const { carId } = useParams();
  const { user } = useAuth();

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
    data.status = 'Pending';
    // console.log(data);

    fetch("https://protected-stream-32771.herokuapp.com/addOrders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal("Congrats!", "Order Placed Successfully", "success");
        }
      });
  };

  useEffect(() => {
    fetch(`https://protected-stream-32771.herokuapp.com/singleCar/${carId}`)
      .then((res) => res.json())
      .then((data) => {
        setCarDetails(data[0]);
      });
  }, []);

  return (
    <div className="container my-5 ">
      <div className="text-start "><Link className="text-primary" to="/home"><i class="fas fa-arrow-circle-left fw-bolder fs-4 ms-4"></i></Link> </div>
      <h2 className="text-primary mb-4">You have chosen: {carDetails?.name}</h2>
      <div className="container row gy-4">
        <div className="col-md-7 text-start">
          <img style={{ width: "100%", height:'50%' }} src={carDetails?.img} alt="" />
          <h5 className="w-100 mt-2 text-primary">{carDetails?.name}</h5>
          <p style={{textAlign:"left"}} className="w-100 mt-0">{carDetails?.description?.slice(0, 250)}.</p>
          <p className="w-100 fw-bolder text-primary">${carDetails?.price}</p>
        </div>

        <div className="col-md-5">
          <p className="text-start">Fill up the boxes below with required information:</p>
          <form onSubmit={handleSubmit(onSubmit)} style={{height:'100%'}}>
            <input
              {...register("name", { required: false })}
              value={user?.displayName || 'not given'}
              className="p-2 w-100"
            />
            <br />
            <br />
            <input
              {...register("email", { required: false })}
              value={user?.email}
              className="p-2 w-100"
            />
            <br />
            <br />
            <input
              {...register("address", { required: true })}
              defaultValue=""
              placeholder="Your Address"
              className="p-2 w-100"
            />
            <br />
            <br />
            <input
              {...register("phone", { required: true })}
              defaultValue=""
              placeholder="phone"
              className="p-2  w-100"
            />
            <br />
            <br />
            <input
              type="number"
              {...register("age", { required: true })}
              defaultValue=""
              placeholder="age"
              className="p-2  w-100"
              />
            <br />
            <br />

            {errors.exampleRequired && <span>This field is required</span>}

            <input
              type="submit"
              value="Order Now"
              className="btn btn-primary text-light ms-2 w-75"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
