import React from 'react';

const EventDetail = ({event}) => {
    return (
        <div className="col-md-4 sm-6 text-center">
            <img style={{height: '250px', width: '350px', borderRadius: '10px'}} src={event.img} alt=""/>
            <h5 className="mt-3 mb-3">{event.title}</h5>
            <p className="text-secondary">{event.description}</p>
        </div>
    );
};

export default EventDetail;