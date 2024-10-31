import React, { useState } from 'react'
import StatusEnum from '../Models/StatusEnum'
import PriorityEnum from '../Models/PriorityEnum'
import Mission from '../Models/Mission'

interface Props {
    setmissions: (x: (missions: Mission[]) => Mission[]) => void
    missions: Mission[]
}

export default function AddMission({ setmissions, missions }: Props) {
    const [name, setname] = useState('')
    const [status, setstatus] = useState(StatusEnum[0])
    const [priority, setpriority] = useState(PriorityEnum[0])
    const [description, setdescription] = useState('')

    const newMission = () => {
        const msn = new Mission(name, status, priority, description)
        setmissions(missions => [...missions, newMission])
    }
    return (
        <>
            <input type="text"  placeholder='type name of soldier' onChange={e => { setname(e.target.value) }}/>
            <select name="stat" onChange={e => { setstatus(e.target.value) }}>
                <option value={StatusEnum[0]} selected>{StatusEnum[0]}</option>
                <option value={StatusEnum[1]}>{StatusEnum[1]}</option>
                <option value={StatusEnum[2]}>{StatusEnum[2]}</option>
            </select>
            <select name="prior" onChange={e => { setpriority(e.target.value) }}>
                <option value={PriorityEnum[0]} selected>{PriorityEnum[0]}</option>
                <option value={PriorityEnum[1]}>{PriorityEnum[1]}</option>
                <option value={PriorityEnum[2]}>{PriorityEnum[2]}</option>
            </select>
            <input type="text" placeholder='description' onChange={e => { setdescription(e.target.value) }}/>
            <button onClick={() => {newMission}}>Add Mission</button>
        </>
    )
}
