 import React, { useState } from 'react'
import AddMission from './componnents/AddMission'
import Grid from './componnents/Grid'
 
 export default function App() {
  const [missions, setmissions] = useState([])
   return (
     <div>
       <AddMission/>
       <Grid/>
     </div>
   )
 }
 