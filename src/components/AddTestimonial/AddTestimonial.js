import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddTestimonial = () => {
    const { handleSubmit } = useForm();

    const onSubmit = data => {

        fetch('http://localhost:3001/addTestimonial', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            if(res.ok){
                alert('Testimonial posted successfully');
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-9 mx-auto">
                <h2 className="ms-5">Review</h2>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name *"/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <textarea name="" className="form-control" cols="30" rows="10" placeholder="Review *"></textarea>
                    </div>
                </form>
                <div className="form-group text-center">
                    <button type="button" className="btn btn-primary"> Submit </button>
                </div>
            </div>
        </div>
    );
};

export default AddTestimonial;