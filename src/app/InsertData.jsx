import axios from 'axios'
import React, { useState } from 'react'

function InsertData() {
    const [users, setUsers] = useState({ id: "", name: "", email: "", mobile: "" })
    const SubmitHandler = () => {
        axios.post("http://localhost:4000/user", users)
    }
    return (
        <div>
            <h1> InsertData</h1>
            <form onSubmit={SubmitHandler}>
                <p>
                    <input
                        type="text"
                        value={users.name}
                        onChange={(e) => { setUsers({ ...users, name: e.target.value }) }}
                        placeholder='Enter Your Name'
                    />
                </p>
                <p>
                    <input
                        type="email"
                        value={users.email}
                        onChange={(e) => { setUsers({ ...users, email: e.target.value }) }}
                        placeholder='Enter Your email'
                    />
                </p>
                <p>
                    <input
                        type="text"
                        value={users.mobile}
                        onChange={(e) => { setUsers({ ...users, mobile: e.target.value }) }}
                        placeholder='Enter Your mobile'
                    />
                </p>
                <p>
                    <button onClick={InsertData}>enter</button>
                </p>
            </form>

        </div>
    )
}

export default InsertData