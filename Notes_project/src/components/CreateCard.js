import React, { Component } from 'react';
import './NoteContainer.css';



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
                <div className="FormContents">
                    <h4 className="FormHeader"> Create New Note: </h4>
                    {/* <form onSubmit={}> */}
                        <input className="TitleForm"
                            onChange={this.handleInputChange}
                            placeholder="Note Title"
                            value={this.state.title}
                            name="title"
                        />
                        <input className="BodyForm"
                            onChange={this.handleInputChange}
                            placeholder="Insert Notes"
                            value={this.state.body}
                            name="body"
                        />
                        <button className="SaveButton" type="submit"> Save </button>
                    {/* </form> */}
                </div>
            </div>




        );
    };
}

export default CreateCard;










// const CreateCard = () => <h1>Create Card</h1>



// export default CreateCard;