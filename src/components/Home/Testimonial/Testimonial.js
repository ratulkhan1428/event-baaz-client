import React from 'react';

const Testimonial = (props) => {
    const {name, description} = props.testimonial;
    return (
        <div className="mb-5 d-flex ms-5 mt-5">
            <div style={{height: '200px', borderRadius: '10px'}} className="shadow-sm mt-5">
                <div>
                    <p className="text-center mb-5">{description}</p>
                </div>
                <div className="card-footer  align-items-center">
                    --- <b className="card-text text-center">{name}</b>
                </div>
            </div>
        </div>

    );
};

export default Testimonial;