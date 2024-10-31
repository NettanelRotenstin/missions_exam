import React from 'react'
import Mission from '../Models/Mission'

interface Props {
    msn: Mission
}

export default function Card({ msn }: Props) {
    const deleteMission = async () => {
        const res: Response = await fetch(`https://reactexambackend.onrender.com/missions/8583467/${msn.id}`)
    }
    const incStatus = async () => {
        const result: Response = await fetch(`https://reactexambackend.onrender.com/missions/8583467/progress/${msn.id}`)
    }
    return (
        <>
            <h5>Name :{msn.name}</h5>
            <p>Status :{msn.status}</p>
            <p>Priority :{msn.priority}</p>
            <p>Description :{msn.description}</p>
            <div className='btns'>
                <button onClick={incStatus}>
                    {msn.status}
                </button>
                <button onClick={deleteMission}>
                    Delete
                </button>
            </div>
        </>
    )
}
