import {GET_ALL_CONTACTS}  from "../types" ;

const initstate = {
    contacts:[],
    loading:true,
};

const ContactReducers=(state=initstate,{type,payload})=>{

switch (type) {
    case GET_ALL_CONTACTS:
        
       return{ ...state,contacts:payload,loading:false}

    default: 
    return state;
}
}
export default ContactReducers;