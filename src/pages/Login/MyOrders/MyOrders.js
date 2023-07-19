import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import swal from "sweetalert";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const date = new Date().toLocaleDateString();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://fastzone-server-site.onrender.com/myOrders/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
        setIsLoading(false)
      });
  }, [user?.email, isLoading]);

  // ORDERED PRODUCT DELETE METHOD
  const handleDelete = (id) => {

    swal({
      title: "Are You Sure you want to delete?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          `https://fastzone-server-site.onrender.com/deleteProduct/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount) {
              setIsLoading(true);
              const remainingOrders = myOrders.filter(
                (order) => order._id !== id
              );
              setMyOrders(remainingOrders);
              setIsLoading(false);
              swal("Your Ordered Item Deleted Successfully!", "Well Done!", {
                icon: "success",
                timer: 1220,
              });
            }
          });
      }
    });

    // fetch(`https://fastzone-server-site.onrender.com/deleteProduct/${id}`, {
    //   method: "DELETE",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const proceed = window.confirm(
    //       "Stop! are you sure you want to delete?"
    //     );
    //     if (proceed.ok) {
    //       if (data.deletedCount === 1) {
    //         const remainingOrders = myOrders.filter(
    //           (order) => order._id !== id
    //         );
    //         setMyOrders(remainingOrders);
    //       }
    //     }
    //   });
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
          {myOrders.map((order, index) => (
            <tr key={index}>
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
