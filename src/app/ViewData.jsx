import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ViewData() {
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
    </tr>)
    return (
        <>
            <table border="1" width="100%" align='center'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </>
    )
}

export default ViewData