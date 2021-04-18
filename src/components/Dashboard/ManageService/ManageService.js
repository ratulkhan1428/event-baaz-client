import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageProduct = ({product}) => {
    const [manageServices, setManageServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/services')
        .then(res => res.json())
        .then(data => setManageServices(data));
    }, []);

    const deleteService = id => {
        fetch(`http://localhost:3001/deleteService/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully', result)
        })
        console.log('button clicked', id)
    }

    const ManageList = () => {
        return (
            manageServices.map(manageService => {
                return (
                    <React.Fragment>
                        <tbody>
                            <tr>
                                <td>{manageService.name}</td>
                                <td>{manageService.description}</td>
                                <td><FontAwesomeIcon icon={faEdit} /> <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteService(manageService._id)} style={{cursor: 'pointer', color: 'red'}} /></td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                )
            })
        )
    }

    return (
        <div className="container row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="mt-5 col-md-9">
                <h1>Manage Service</h1>
                <br/>
                <table className="table w-100">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        ManageList()
                    }
                </table>
            </div>
        </div>
    )
};

export default ManageProduct;