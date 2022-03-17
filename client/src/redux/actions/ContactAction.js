import axios from 'axios' ;
import {GET_ALL_CONTACTS} from '../types'

export const getAllContact=()=>async dispatch =>{

 try {
     const res = await axios.get('/api/contacts')
     console.log(res.data)
     dispatch({type:GET_ALL_CONTACTS, payload:res.data})
 } catch (error) {
     console.log(error)
 }

};



//Add new contact

export const addContact=(formData)=>async(dispatch)=>{
try {
    await axios.post('/api/contacts',formData)
    dispatch(getAllContact())
} catch (error) {
    console.log(error)
}

}