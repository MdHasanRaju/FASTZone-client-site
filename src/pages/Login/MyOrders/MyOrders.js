import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    },[user?.email])

    return (
        <div>
            <h2>This is My Orders</h2>
        </div>
    );
};

export default MyOrders;