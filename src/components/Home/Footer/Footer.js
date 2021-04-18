import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHandPointRight, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <section className="footer">
            <div className="container pt-5 row">
                <div className="col-md-6 mb-5">
                    <h3 className="mb-4">Get in touch</h3>
                    <div className="d-flex">
                        <FontAwesomeIcon style={{marginRight: '10px', marginTop: '5px'}} icon={faMapMarkerAlt} />
                        <h5>Bogura Sadar, Bogura - 5800</h5>
                    </div>
                    <br/>
                    <div className="d-flex">
                        <FontAwesomeIcon style={{marginRight: '10px', marginTop: '5px'}} icon={faEnvelope} />
                        <h5>eventbaaz@gmail.com</h5>
                    </div>
                    <br/>
                    <div className="d-flex">
                        <FontAwesomeIcon style={{marginRight: '10px', marginTop: '5px'}} icon={faPhoneAlt} />
                        <h5>+80 1711 11 11 11</h5>
                    </div>
                </div>

                <div className="col-md-6 mb-5">
                    <h3 className="mb-4">Services We Provide</h3>
                    <div className="d-flex">
                        <FontAwesomeIcon  style={{marginRight: '10px', marginTop: '5px'}} icon={faHandPointRight} />
                        <h5>Wedding</h5>
                    </div>
                    <br/>
                    <div className="d-flex">
                        <FontAwesomeIcon  style={{marginRight: '10px', marginTop: '5px'}} icon={faHandPointRight} />
                        <h5>Birthday Party</h5>
                    </div>
                    <br/>
                    <div className="d-flex">
                        <FontAwesomeIcon  style={{marginRight: '10px', marginTop: '5px'}} icon={faHandPointRight} />
                        <h5>Private Party</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;