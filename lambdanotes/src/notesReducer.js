import {ADD_NOTES} from "./allActions";
import { EDIT_NOTE } from "./allActions";
import { FILTERED_NOTE } from "./allActions";
const initialState = [
    { title: 'Schools', text: 'Lambda School offers a full-time, 6-month online full stack coding school.Lambda School offers a full-time..' },
    { title: 'Program', text: 'Lambda School offers a full-time, 6-month online full stack coding school.Lambda School offers a full-time..'},
    { title: 'Projects', text:'Lambda School offers a full-time, 6-month online full stack coding school.Lambda School offers a full-time..'},
    { title: 'Future', text: 'Lambda School offers a full-time, 6-month online full stack coding school.Lambda School offers a full-time..' },
    { title: 'Jobs', text: 'Lambda School offers a full-time, 6-month online full stack coding school.Lambda School offers a full-time..' },
    { title: 'Pms', text: 'Lambda School offers a full-time, 6-month online full stack coding school.Lambda School offers a full-time..' },
    { title: 'Students', text: 'Lambda School offers a full-time, 6-month online full stack coding school.Lambda School offers a full-time..' },
    { title: 'Reviews', text: 'Lambda School offers a full-time, 6-month online full stack coding school.Lambda School offers a full-time..' },
    { title: 'Dreams', text: 'Lambda School offers a full-time, 6-month online full stack coding school.Lambda School offers a full-time..' },
]
    
     
const notesReducer = (state = initialState, action)=>{  
    
  
       



    switch(action.type){
       case ADD_NOTES:           
            return (               
                state = [...state, action.payload])
        case EDIT_NOTE :
            return state = [...state,...action.payload] 
        case FILTERED_NOTE:
            return state = [action.payload]
            
        default:
         return state

 }
}
 export { notesReducer};