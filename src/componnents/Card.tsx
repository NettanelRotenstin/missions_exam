import Mission from '../Models/Mission'
import StatusEnum from '../Models/StatusEnum'

interface Props {
    msn: Mission
    status: StatusEnum | string
}

export default function Card({ msn, status }: Props) {
    const deleteMission = async () => {
        await fetch(`https://reactexambackend.onrender.com/missions/8583467/${msn._id}`)
    }
    const incStatus = async () => {
        await fetch(`https://reactexambackend.onrender.com/missions/8583467/progress/${msn._id}`)
    }
    return (
        <div style={status == StatusEnum.Pending ? { backgroundColor: "green" } : status == StatusEnum.InProgress ? { backgroundColor: "orange" } : { backgroundColor: "red" }}>
            <h5>Name :{msn.name}</h5>
            <p>Status :{msn.status}</p>
            <p>Priority :{msn.priority}</p>
            <p>Description :{msn.description}</p>
            <div className='btns'>
                <button onClick={incStatus}>
                    {status}
                </button>
                <button onClick={deleteMission}>
                    Delete
                </button>
            </div>
        </div>
    )
}
