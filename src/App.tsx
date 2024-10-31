import React, { useState } from 'react'
import AddMission from './componnents/AddMission'
import Grid from './componnents/Grid'

export default function App() {
  const [missions, setmissions] = useState([])



  const data = async () => {
    const myData = await fetch(
      `https://reactexambackend.onrender.com/missions/8583467`
    );
    return (
      <div>
        <AddMission />
        <Grid />
      </div>
    )
  }
