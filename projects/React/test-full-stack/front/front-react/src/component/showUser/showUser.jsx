//import React, { use } from 'react';
import "./showUser.css";
import data from "./data.json"

export default function ShowUser() {

    const users = data.map((user ,index) => {
        return (
            <tr key={index}>
                        <td>{index+1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.Phone}</td>
                        <td>{user.Address}</td>
                        <td>{user["Id-number"]}</td>
                        <td>Update | Delete</td>
                    </tr>
        )
    })
    return (
        <>
        <div className="showUser-container">
            <h2> showUser</h2>
            <table className="showUser-table">
                <thead>
                    <tr className='showUser-header'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Id-number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
            </table>
        </div>
        </>
    );
}