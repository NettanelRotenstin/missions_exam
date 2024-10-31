import React, { useEffect, useState } from 'react'
import AddMission from './componnents/AddMission'
import Grid from './componnents/Grid'
import PriorityEnum from './Models/PriorityEnum';
import StatusEnum from './Models/StatusEnum';
import Mission from './Models/Mission';

export default function App() {
  const [missions, setmissions] = useState<Mission[]>([])
  useEffect(() => {
    data();
  }, []);
  const data = async () => {
    const myData = await fetch(
      `https://reactexambackend.onrender.com/missions/8583467`
    );
    const strData = await myData.json();
    const ourData = strData.reduce((myList: [], item: any) => {
      const msn = {
        name: item.name,
        status: StatusEnum[item.status],
        priority: PriorityEnum[item.priority],
        description: item.description,
      };
      return [...myList, msn];
    }, []);
    setmissions([...ourData])
  }

  return (
    <div>
      <AddMission />
      <Grid />
    </div>
  )
}
