import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddAdmin = () => {
    const { register, handleSubmit, formState: { errors }, reset} = useForm();

    const onSubmit = data => {
        const api = 'http://localhost:3001/addAdmin'
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if(res.ok){
                reset();
                alert('Admin added successfully');
            }
        })
        .catch(err => console.log(err))
        
    }



    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5>Add a Admin</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="abc@gmail.com" {...register('email')} className="form-control"/>
                        {errors.email && <span className="text-danger"><small>Email cannot be empty</small></span>}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddAdmin;