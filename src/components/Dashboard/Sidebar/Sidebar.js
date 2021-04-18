import { faComments, faHome, faList, faPlus, faSignOutAlt, faTags, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3001/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [loggedInUser.email])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-3 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-secondary">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addBooking" className="text-secondary">
                        <FontAwesomeIcon icon={faTags} /> <span>Book</span>
                    </Link>
                </li>
                    <li>
                        <Link to="/bookings" className="text-secondary">
                            <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addTestimonial" className="text-secondary">
                            <FontAwesomeIcon icon={faComments} /> <span>Review</span>
                        </Link>
                    </li>
                    
                    {isAdmin && <div>
                        <li>
                            <Link to="/orders" className="text-secondary">
                                <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="text-secondary">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addAdmin" className="text-secondary">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageService" className="text-secondary">
                                <FontAwesomeIcon icon={faThLarge} /> <span>Manage Services</span>
                            </Link>
                        </li>
                    </div>}
                </ul>
            <div>
                <Link to="/" className="text-secondary"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;