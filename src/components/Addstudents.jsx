import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudents = (props) => {
  var [students, setstudents] = useState(props.data)
  console.log("add page props" + props.data)

  const handlechange = (e) => {
    const { name, value } = e.target
    setstudents({ ...students, [name]: value })
    console.log(students)
  }

  const saveData = () => {
    console.log("ButtoCliked");
    if (props.method === "post") {
      axios.post("http://localhost:3005/students", students)
        .then(response => {
          alert("succesfully added")
        })
        .catch(error => {
          alert("failed")
        })

    } else if (props.method === "put") {
      axios.put("http://localhost:3005/students/" + students.id, students)
        .then((response) => {
          //console.log("put data" + response.data)
          alert("success")
          window.location.reload(false);

        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <div>
      <Typography>Add Students</Typography>
      <TextField variant='outlined' label="Id" name='id' value={students.id} onChange={handlechange}></TextField>
      <br></br>
      <TextField variant='outlined' label="Name" name='name' value={students.name} onChange={handlechange}></TextField>
      <br></br>
      <TextField variant='outlined' label="Grade" name='grade' value={students.grade} onChange={handlechange}></TextField>
      <br></br>
      <Button variant="contained" color='primary' onClick={saveData}>Submit</Button>
    </div>
  )
}

export default Addstudents
