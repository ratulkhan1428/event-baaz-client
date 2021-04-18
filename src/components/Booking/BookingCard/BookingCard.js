import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import DatePicker from 'react-date-picker';

const BookingCard = ({date}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        data.date = date;
        data.created = new Date();

        fetch('http://localhost:3001/addBooking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({data, date: selectedDate})
        })
        .then(res => {
            if(res.ok){
                reset();
                alert('Admin added successfully');
            }
        })
        .catch(err => console.log(err))
    };



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <b>Name</b>
                <div className="form-group mb-2">
                    <input type="text" {...register('name')} name="name" placeholder="Your Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>
                <b>Email</b>
                <div className="form-group mb-2">
                    <input type="text" {...register('email')} name="email" placeholder="Email" className="form-control" />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>
                <b>Select Event</b>
                <div className="form-group mb-2">
                    <select className="form-control" name="event" {...register('event')} >
                        <option disabled={true} value="Not set">Select Event</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Birthday Party">Birthday Party</option>
                        <option value="Private Party">Private Party</option>
                    </select>
                    {errors.event && <span className="text-danger">This field is required</span>}
                </div>
                <b>Select Date</b>
                <div>
                    <DatePicker
                        onChange={handleDateChange}
                        value={selectedDate}
                    />
                </div>
            
            </form>
        </div>
    );
};

export default BookingCard;