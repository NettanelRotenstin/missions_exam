import React from 'react'
import StatusEnum from '../Models/StatusEnum'
import PriorityEnum from '../Models/PriorityEnum'


export default function AddMission() {
    return (
        <>
            <input type="text" placeholder='type name of soldier' />
            <select name="stat" id="">
                <option value=''>{StatusEnum[0]}</option>
                <option value=''>{StatusEnum[1]}</option>
                <option value=''>{StatusEnum[2]}</option>
            </select>
            <select name="prior" id="">
                <option value=''>{PriorityEnum[0]}</option>
                <option value=''>{PriorityEnum[1]}</option>
                <option value=''>{PriorityEnum[2]}</option>
            </select>
            <input type="text" placeholder='description'/>
            <button onClick={()=>{}}>Add Mission</button>
        </>
    )
}
