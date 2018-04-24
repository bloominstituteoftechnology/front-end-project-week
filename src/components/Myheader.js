
import React from 'react'; 


const Myheader = (props) => {
    
   const headerText = 'your Notes'; 

    return (


    <div className = {props.c}>
        {(props.p==='none') ? headerText :  "" }
    </div>

    )
}
            

 


export default Myheader; 
