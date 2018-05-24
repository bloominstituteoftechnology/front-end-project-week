import React, { Component } from 'react';



class EditCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }
        







    render() {
        return(

            <div className="NoteForm">
                <h2> Edit Note: </h2>
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

export default EditCard;