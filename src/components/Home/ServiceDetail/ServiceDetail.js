import React from 'react';
import {useSpring, animated} from 'react-spring'

const ServiceDetail = ({service}) => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    return (
        <animated.div style={props} className="col-md-4 text-center mb-5">
        {
            service.image ? <img style={{height: '100px'}} 
            src={`data:image/png;base64,${service.image.img}`} alt=""/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" 
            src={`http://localhost:3001/${service.img}`} alt=""/>
        }
            <h4>{service.name}</h4>
            <p>{service.description}</p>
        </animated.div>
    );
};

export default ServiceDetail;