import React from 'react';
import BookingCard from '../../Booking/BookingCard/BookingCard';
import Payment from '../../Payment/Payment/Payment';
import Sidebar from '../Sidebar/Sidebar';

const BookEvent = () => {
    return (
        <div className="row container-fluid">
                <Sidebar></Sidebar>
            <div className="col-md-9">
                <h1 className="text-center mb-5">Book Event</h1>
            <br/>
                <div className="mb-5">
                    <BookingCard></BookingCard>
                </div>
                <div className="mb-4">
                    <h5>Pay with <b>Credit Card</b></h5>
                    <Payment></Payment>
                </div>
                <div className="form-group">
                    <button style={{float: 'right'}} type="submit">Send</button>
                </div>
            </div>
        </div>
    );
};

export default BookEvent;