import React, { useEffect, useState } from 'react'
import { TableContainer, TableHead, Table, TableRow, TableCell, TableBody, Button } from '@mui/material';
import axios from 'axios'
import Addstudents from './Addstudents';
// import Addstudents from './Addstudents';

const Read = () => {
    var [students, setstudents] = useState([])
    var [singlevalues, setsinglevalues] = useState()
    var [update, setUpdate] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:3005/students")
            .then(response => {
                console.log(response.data)
                setstudents(students = response.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deletestudent = (id) => {
        console.log("delete clicked" + id);
        axios.delete("http://localhost:3005/students/" + id)
            .then(response => {
                alert("deleted")
                window.location.reload(false)
            })
    }

    const Updatevalue = (value) => {
        setsinglevalues(value);
        setUpdate(true);
    }

    var finalJSX = <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Grade</TableCell>
                    <TableCell>Delete</TableCell>
                    <TableCell>Update</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((value, index) => {
                    return <TableRow key={index}>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.grade}</TableCell>
                        <TableCell>
                            <Button onClick={() => deletestudent(value.id)}>Delete</Button>
                        </TableCell>
                        <TableCell>
                            <Button color='success' onClick={() => Updatevalue(value)}>Update</Button>
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>

    if (update)
        finalJSX = <Addstudents data={singlevalues} method="put" />
    return (
        <div>
            {finalJSX}
        </div>
    )
}

export default Read
