import { TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Teacher() {
    var [teachers,setteachers]=useState([])
        useEffect(()=>{
            
             axios.get("http://localhost:3005/teachers")
             .then(Response=>{

                console.log(Response.data)
                setteachers(teachers=Response.data)
        })
        .catch(err=>console.log(err))
    })
  return (
    <div>
        <Typography variant="h1" gutterBottom>
                h1. Heading
            </Typography>
            <TableContainer>
                <table>
                  <TableHead>
                    <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>name</TableCell>
                            <TableCell>class</TableCell>
                    </TableRow>
                    </TableHead>  
                    <TableBody>
                        {teachers.map((value,index)=>{
                            return<TableRow>
                                <TableCell>{value.id}</TableCell>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.class}</TableCell>
                            </TableRow>
                        })}
                        
                    </TableBody>
                </table>
            </TableContainer>
    </div>
  )
}

export default Teacher
