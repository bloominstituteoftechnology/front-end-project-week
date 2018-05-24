import React, { Component } from 'react';
import './CreateCard.css';



class CreateCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }
        






    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    }


    render() {
        return(

            <div className="NoteForm">
                <h4> Create New Note: </h4>
                {/* <form onSubmit={}> */}
                    <input className="TitleForm"
                        // onChange={}
                        placeholder="Note Title"
                        value={this.state.title}
                        name="title"
                    />
                    <input className="BodyForm"
                        // onChange={}
                        placeholder="Insert Notes"
                        value={this.state.body}
                        name="body"
                    />
                    <button className="SaveButton" type="submit"> Save </button>
            </div>




        );
    };
}

export default CreateCard;










// const CreateCard = () => <h1>Create Card</h1>



// export default CreateCard;