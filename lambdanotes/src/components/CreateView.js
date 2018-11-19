import React, { Component } from 'react';
import Container from './styles/Container';
import Wrapper from './styles/Wrapper';
import Input from './styles/Input';
import Button from './styles/Button';


class CreateView extends Component {
    constructor(props) {
        super(props);

        this.state ={
            title: "",
            textBody: "",
        }
    }
    inputHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault();
        this.props.addContent(event,this.state);
        this.setState({
            title:'',
            textBody:''
        })    
        this.props.history.push("/");  
    }

    // addNote = notes => {
    //     axios.post(`https://fe-notes.herokuapp.com/note/create`, notes)
    //          .then( response => {
    //              this.setState({
    //                  notes: Object.assign({}, this.props.notes, ...notes, response._id, response.tags )
    //              })
    //          })
    //          .catch( error => {
    //             this.setState({ errorMessage: "Error: There is some error getting notes"})
    //          })
    // }
    render() {
        console.log(this.state.title, this.state.textBody);
        return (
            <>
               <Wrapper>
                <h2>Create New Note:</h2>
                <Container>
                  <form className='form' onSubmit= {this.submitHandler}>
                      <Input className="input"
                             placeholder="Note Title"
                             name="title"
                             onChange={this.inputHandler}
                             value={this.state.title}></Input>
                      <textarea 
                             className='textarea' rows="15" cols="90"
                             placeholder="New Content"
                             name="textBody"
                             value={this.state.textBody}
                             onChange={this.inputHandler}></textarea>
                      <Button type='submit' className="save">Save</Button>
                  </form>
                </Container>
               </Wrapper>  
            </>
        );
    }
}

export default CreateView;
