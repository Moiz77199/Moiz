//import * as React from 'react';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function BillingStatus() {
    const classes = useStyles();
    const paperStyle={padding:'50px 20px', width:400,margin:"20px auto"}
    const[BiliingStatus,setBillingStatus]=useState('')
    const[status,setStatus]=useState('')
    const[custom1,setCustom1]=useState('')
    const[custom2,setCustom2]=useState('')
    const[custom3,setCustom3]=useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const billingStatus={BillingStatus,status,custom1,custom2,custom3}
        console.log(billingStatus)
        fetch("http://localhost:8080/BillingStatus/addbillingstatus",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(BiliingStatus)

  }).then(()=>{
    console.log("New BillingStatus added")
  })
    }

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <h2><u>Add Role</u></h2>   
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField id="outlined-basic" label="BillingStatus" variant="outlined" fullWidth
      value={BillingStatus}
      onChange={(e)=>setBillingStatus(e.target.value)}
      />
      <TextField id="outlined-basic" label="Status" variant="outlined" fullWidth
      value={status}
      onChange={(e)=>setStatus(e.target.value)}
      />
      <TextField id="outlined-basic" label="Custom1" variant="outlined" fullWidth
      value={custom1}
      onChange={(e)=>setCustom1(e.target.value)}
      />
      <TextField id="outlined-basic" label="Custom2" variant="outlined" fullWidth
      value={custom2}
      onChange={(e)=>setCustom2(e.target.value)}
      />
      <TextField id="outlined-basic" label="Custom3" variant="outlined" fullWidth
      value={custom3}
      onChange={(e)=>setCustom3(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form> 
    </Paper>
    </Container>  
  );
}
