import React from 'react';

const Contact = () => {
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h1>Connect with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="name" className="form-control" placeholder="Your Name *"/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email Address *"/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="contact" className="form-control" placeholder="Cell Phone *"/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <textarea name="" className="form-control" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <br/>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-primary"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;