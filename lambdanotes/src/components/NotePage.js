import React from 'react';

class NotePage extends React.Component {    
    
    render(props){
        return(
            <div>{console.log("note page", props.content)}</div>
        )
    }
}

export default NotePage;