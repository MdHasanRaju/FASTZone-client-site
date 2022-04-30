import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const date = new Date().toLocaleDateString();
  const [statusId, setStatusId] = useState('')

  // Status form
  const { register, handleSubmit } = useForm();


  useEffect(() => {
    fetch("https://protected-stream-32771.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, []);

  // Status Display
  const handleOrderId = (id) => {
    setStatusId(id)
    
  }

  const onSubmit = (data) => {
    fetch(
      `https://protected-stream-32771.herokuapp.com/statusUpdate/${statusId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("status data", data);
      });
    
  };

  // Manage All Orders Delete Method
  const handleDelete = (id) => {
    fetch(`https://protected-stream-32771.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {

        
        const proceed = window.confirm(
          "Stop! are you sure you want to delete?"
        );
        if (proceed) {
          if (data.deletedCount === 1) {
            const remainingOrders = allOrders.filter(
              (order) => order._id !== id
            );
            setAllOrders(remainingOrders);
          }
        }

        // Swal.fire({  
        //   title: 'Hey! are you sure you want to do this?',  
        //   showCancelButton: true,  
        //   confirmButtonText: `Delete`,  
        // }).then((result) => {  
        //   /* Read more about isConfirmed, isDenied below */  
        //     if (result.isConfirmed) {    
        //       if (data.deletedCount === 1) {
        //         const remainingOrders = allOrders.filter(
        //           (order) => order._id !== id
        //         );
        //         setAllOrders(remainingOrders);
                 
        //       }
        //       if (result.isConfirmed.ok) {
        //         Swal.fire('Deleted!', '', 'success') 
        //       }
        //     } 
        // });
      });
  };

  return (
    <div className="container">
      <h2>Manage All Orders For Admin</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
            <th scope="col">Item Name</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order) => (
            <tr>
              <td>{order?.address}</td>
              <td>{order?.email}</td>
              <td>{order?.productName}</td>
              <td>${order.price}</td>
              {/* <td>{date}</td> */}
              <td>
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex">
                  <select onClick={() => handleOrderId(order?._id)} {...register("status")}>
                    <option value={order?.status}>{order?.status}</option>
                    <option value="Approved">Approved</option>
                    <option value="Done">Done</option>
                  </select>
                  <input type="submit" value="Update"/>
                </form>
              </td>
              <td>
                <Button variant="contained" size='small' color="primary" onClick={() => handleDelete(order._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrders;
