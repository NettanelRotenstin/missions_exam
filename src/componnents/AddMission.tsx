import React, { useState } from 'react'
import StatusEnum from '../Models/StatusEnum'
import PriorityEnum from '../Models/PriorityEnum'
import Mission from '../Models/Mission'

interface Props {
    setmissions: (msn: Mission[]) => void
    missions: Mission[]
    status: StatusEnum | string
}

export default function AddMission({ setmissions, missions, status }: Props) {
    const [name, setname] = useState('')
    const [priority, setpriority] = useState<PriorityEnum | string>(PriorityEnum.Low)
    const [description, setdescription] = useState('')
    const [thisStatus, setthisStatus] = useState<PriorityEnum | string>(PriorityEnum.Low)

    const newMission = async () => {
        const newMsn = new Mission(name, status, priority, description)
        try {
            const res: Response = await fetch(`https://reactexambackend.onrender.com/missions/8583467`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: await JSON.stringify({ name, thisStatus, priority, description })})
        } catch (error) {
            console.log(error);
        }
        setmissions([...missions])
    }
    return (
        <div className='add'>
            <h4>Military Operations Sashboard</h4>
            <input type="text" placeholder='type name of soldier' onChange={e => { setname(e.target.value) }} />
            <select value={1} name="stat" onChange={(e) => { setthisStatus(e.target.value) }}>
                <option value={StatusEnum[0]} >{StatusEnum[0]}</option>
                <option value={StatusEnum[1]}>{StatusEnum[1]}</option>
                <option value={StatusEnum[2]}>{StatusEnum[2]}</option>
            </select>
            <select name="prior" onChange={e => { setpriority(e.target.value) }}>
                <option value={PriorityEnum[0]} >{PriorityEnum[0]}</option>
                <option value={PriorityEnum[1]}>{PriorityEnum[1]}</option>
                <option value={PriorityEnum[2]}>{PriorityEnum[2]}</option>
            </select>
            <input type="text" placeholder='description' onChange={e => { setdescription(e.target.value) }} />
            <button onClick={newMission}>Add Mission</button>
        </div>
    )
}
