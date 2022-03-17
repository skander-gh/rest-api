import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllContact } from '../redux/actions/ContactAction';

import Cardee from './Cardee';

function Contacts() {

  const contacts=useSelector(state=>state.ContactReducers.contacts)
  const dispatch=useDispatch()
  

// get contacts

useEffect(()=>{
dispatch(getAllContact())
},[dispatch])

  return (
  <div>
    
    
{ contacts.map(contact=>(<Cardee contact={contact} key={contact._id}/>))  }

  </div>
  )
}

export default Contacts;
