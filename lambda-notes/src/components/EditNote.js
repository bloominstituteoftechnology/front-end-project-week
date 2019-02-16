import React from 'react';

class EditNote extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            note: {
                title:"",
                textBody:""
            }
        }
    }

    render(){
        console.log(this.props)
        return(
            <div>HI</div>
        )
    }
}

export default EditNote;