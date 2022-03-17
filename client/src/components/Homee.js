import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Homee() {
  return (
  
  <div>

  <Link to='/Contacts' >
  <Button variant='primary'> Contact List</Button>
  </Link>
<br></br>
<br></br>
<Link to='/AddEddit' >
  <Button variant='primary'> Contact Add</Button>
</Link>
  </div>
  
  );
}

export default Homee;
