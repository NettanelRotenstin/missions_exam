import React, { useEffect, useState } from 'react'
import AddMission from './componnents/AddMission'
import Grid from './componnents/Grid'
import PriorityEnum from './Models/PriorityEnum';
import StatusEnum from './Models/StatusEnum';
import Mission from './Models/Mission';

export default function App() {
  const [missions, setmissions] = useState<Mission[]>([])
  const [status, setstatus] = useState<StatusEnum | string>(StatusEnum.Pending)
  useEffect(() => {
    data();
  }, []);
  const data = async () => {
    const myData = await fetch(`https://reactexambackend.onrender.com/missions/8583467`);
    const strData = await myData.json();
    const ourData = strData.reduce((myList: [], item: any) => {
      const msn = new Mission(
        item.name,
        StatusEnum[item.status],
        PriorityEnum[item.priority],
        item.description,
      );
      return [...myList, msn];
    }, []);
    setmissions([...ourData])
  }

  return (
    <>
      <AddMission missions={missions} setmissions={setmissions}  status={status}/>
      <Grid missions={missions} status={status}/>
    </>
  )
}
