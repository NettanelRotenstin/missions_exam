import React from 'react'
import Mission from '../Models/Mission'

interface Props {
    msn: Mission
}

export default function Card({ msn }: Props) {
    return (
        <>
            <h5>Name :{msn.name}</h5>
            <p>status :{msn.status}</p>
            <p>priority :{msn.priority}</p>
            <p>description :{msn.description}</p>
            <div className='btns'><button>{msn.status}</button><button>Delete</button></div>
        </>
    )
}
