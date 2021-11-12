import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import MyOrdersDetails from "../MyOrdersDetails/MyOrdersDetails";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
      });
  }, [user?.email]);

  const date = new Date().toLocaleDateString();

  // ORDERED PRODUCT DELETE METHOD
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteProduct/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // const proceed = window.confirm(
        //   "Stop! are you sure you want ot delete?"
        // );
        // if (proceed) {
        //   if (data.deletedCount > 0) {
        //     alert("data deleted successfully");
        //     console.log(data);
        //     window.location.reload();
        //   } else {
        //   }
        // }
        
        const proceed = window.confirm(
          "Stop! are you sure you want to delete?"
        );
        if(proceed) {
          if (data.deletedCount === 1) {
            const remainingOrders = myOrders.filter(
              (order) => order._id !== id
            );
            setMyOrders(remainingOrders);
          } 
        }
      });
  };

  return (
    <div className="container">
      <h2>My Orders List</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">UserAddress</th>
            <th scope="col">Email</th>
            <th scope="col">Package Name</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((order) => (
            <tr>
              <td>{order?.address}</td>
              <td>{order?.email}</td>
              <td>{order?.productName}</td>
              <td>${order.price}</td>
              <td>{date}</td>
              <td>
                <button onClick={() => handleDelete(order._id)}>Delete</button>
                <button>Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;

// <MyOrdersDetails key={order._id} myOrders={order}></MyOrdersDetails>;
