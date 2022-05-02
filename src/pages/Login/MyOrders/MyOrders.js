import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import swal from "sweetalert";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const date = new Date().toLocaleDateString();

  useEffect(() => {
    fetch(
      `https://protected-stream-32771.herokuapp.com/myOrders/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
        console.log(data);
      });
  }, [user?.email]);

  // ORDERED PRODUCT DELETE METHOD
  const handleDelete = (id) => {
    fetch(`https://protected-stream-32771.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // const proceed = window.confirm(
        //   "Stop! are you sure you want to delete?"
        // );
        // if (proceed.ok) {
        //   if (data.deletedCount === 1) {
        //     const remainingOrders = myOrders.filter(
        //       (order) => order._id !== id
        //     );
        //     setMyOrders(remainingOrders);
        //   }
        // }

        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Delete!'
        }).then((result) => {
          if (result.isConfirmed) {
            if (data.deletedCount === 1) {
              const remainingOrders = myOrders.filter(
                (order) => order._id !== id
              );
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              setMyOrders(remainingOrders)} else{return false}
          }else {
            return false;
          }
        })
      });
  };

  return (
    <div className="container">
      <h2>MY ORDER LIST</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">User Address</th>
            <th scope="col">Email</th>
            <th scope="col">Item Name</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((order) => (
            <tr>
              <td>{order?.address}</td>
              <td>{order?.email}</td>
              <td>{order?.productName}</td>
              <td>${order.price}</td>
              <td className="text-info fw-bolder">{order?.status}</td>
              <td>
                <button
                  className="btn btn-primary text-light"
                  onClick={() => handleDelete(order._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
