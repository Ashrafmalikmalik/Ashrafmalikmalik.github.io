import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UpdateData() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/user")
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const list = users.map(user => <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.mobile}</td>
        <td><Link to={`/edit/${user.id}`}>Edit</Link></td>
    </tr>)
    return (
        <>
            <table border="1" width="100%" align='center'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </>
    )
}

export default UpdateData