import React, { useState } from 'react';
import {Form ,Button  } from 'react-bootstrap'
function AddEddit() {
  const[formData ,setformData]=useState({name:"",age:0,email:""})

const handlechange=(e)=>{

  setformData({})
}

  return(
   <div>
 {
  
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter you Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter your Age" />
      </Form.Group>
      <Form.Group >
            <Button>Add</Button>
    </Form.Group>
    </Form>
   }





   </div>
   );
}

export default AddEddit;
