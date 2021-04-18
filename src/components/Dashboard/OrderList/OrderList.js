import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:3001/bookings')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, [])

    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <h2 className="mb-5">Service List</h2>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary text-left" scope="col">Sr No</th>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email</th>
                            <th className="text-secondary" scope="col">Event</th>
                            <th className="text-secondary" scope="col">Pay with</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => 

                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{order.data.name}</td>
                                    <td>{order.data.email}</td>
                                    <td>{order.data.event}</td>
                                    <td>Credit Card</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default OrderList;