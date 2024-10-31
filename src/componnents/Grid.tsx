import React from 'react'
import Mission from '../Models/Mission'
import Card from './Card'
import StatusEnum from '../Models/StatusEnum'

interface Props {
    missions: Mission[]
    status:StatusEnum|string
}

export default function Grid({ missions,status }: Props) {
    return (
        <div>
            <h5>Missions</h5>
            {missions.map(msn => <Card   msn={msn} status={status}/>)}
        </div>
    )
}
