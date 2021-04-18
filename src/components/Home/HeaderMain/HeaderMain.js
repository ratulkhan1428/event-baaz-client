import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: 'white'}}>We Arrange Your Event <br /> From Start To Finish</h1>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eos minus obcaecati dolores quae id.</p>
                <Link to="/addBooking"><button className="btn btn-primary">BOOK EVENT</button></Link>
            </div>
        </main>
    );
};

export default HeaderMain;