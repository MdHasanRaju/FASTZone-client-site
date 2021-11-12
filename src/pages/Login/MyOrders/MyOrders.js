import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MyOrdersDetails from '../MyOrdersDetails/MyOrdersDetails';

const MyOrders = () => {
    const {user} = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyOrders(data)
            console.log(data);
        })

    },[user?.email])

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
              <MyOrdersDetails
                key={order._id}
                myOrders={order}
              ></MyOrdersDetails>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default MyOrders;