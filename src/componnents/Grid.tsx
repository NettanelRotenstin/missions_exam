import React from 'react'
import Mission from '../Models/Mission'
import Card from './Card'

interface Props {
    missions: Mission[]
}

export default function Grid({ missions }: Props) {
    return (
        <div>
            <h5>Missions</h5>
            {missions.map(msn => <Card key={msn.id} msn={msn} />)}
        </div>
    )
}
