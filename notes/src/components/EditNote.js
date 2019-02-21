import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


export class EditNote extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            title: this.props.title,
            text: this.props.text   
        }
    };
    

    componentDidMount(){
        axios.get(`http://localhost:3333/notes/${this.props.match.params.id}`)
        .then(res =>{
            this.note = res.data[0]
              this.setState({
                title: this.note.title,
                text: this.note.text
              })
          })
           .catch(err => console.log(err))
     }

    editNote = e => {
        e.preventDefault();
        axios.put(`http://localhost:3333/notes/${this.props.match.params.id}`, this.state)
        .then(res => {
            this.setState({
                title: "", 
                text: ""
            });
        })
            .catch(err => {console.log(err)})
    }

    handleInputChange = e => {
        this.setState( { [e.target.name]: e.target.value});
        console.log(e.target.name)
    };

    // handleInputChange = (event) => {
    //     const {name, value} = event.target;
    //     this.setState(
    //       {
    //         [name]:value
    //       }
    //     )
    //   }

    //   submit = () => {
    //     console.log("submit")
    //   }

    render() {
        return (
            <div className="Createnote">
            <h2>Edit Note:</h2>
                <form onSubmit={this.editNote}>
                    <input 
                        onChange={this.handleInputChange}
                        placeholder={this.state.title}
                        value={this.state.title}
                        name="title"
                    />
                    <textarea
                        className="textform"
                        onChange={this.handleInputChange}
                        placeholder= {this.state.text}
                        value={this.state.text}
                        name="text"
                    />
                    <button type="submit">Update</button>
                </form>
                
            </div>
        )
    }
}