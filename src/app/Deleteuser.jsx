import React from 'react'
import { useParams } from 'react-router-dom'

function Deleteuser() {

    const { id } = useParams()

    return (
        <h1>Deleteuser {id}</h1>
    )
}

export default Deleteuser