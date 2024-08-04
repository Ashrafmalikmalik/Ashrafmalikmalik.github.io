import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function EditData() {
  const { id } = useParams()
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:4000/user/${id}`)
      .then(res =>
        setUsers(res.data)
      )
      .catch(err => {
        console.log(err)
      })
  }, [])
  const SubmitHandler = () => {
    axios.put(`http://localhost:4000/user/${id}`, users)
  }
  return (
    <>
      <h1>EditData</h1>
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
          <button>enter</button>
        </p>
      </form>
    </>
  )
}

export default EditData