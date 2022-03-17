import React from 'react';
import {ListGroup } from 'react-bootstrap';
function Cardee({ contact }) {
  return(
  <div>
<ListGroup>

  <ListGroup.Item variant="primary"> Name: {contact.name}</ListGroup.Item>
  <ListGroup.Item action variant="secondary"> Age: {contact.age} </ListGroup.Item>
  <ListGroup.Item action variant="success"> Email: {contact.email} </ListGroup.Item>
  <br></br>

</ListGroup>
  </div>
 
  ) ;
}

export default Cardee;
