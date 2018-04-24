import React from 'react'; 


const ShowSingle = (props) => {

    return (
        
        <div className="single-note" >
            <div>{console.log('from sigle',props)}</div>
      
            <div>{props.p.content}</div>
        </div>
    )
}

export default ShowSingle;