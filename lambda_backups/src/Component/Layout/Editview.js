import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Styles from '../../Styles/Editview.css';
import Mybutton from '../Reusables/Mybutton';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export default class Editview extends Component {
    componentDidMount(){
        console.log(this.props)
        this.props.handleEdit(this.props.id)
    }
  render() {
    console.log('props',this.props)
    return (
        <div className="BigContainer">

            <div className="sidebar">
                <div className="sidebarname">
                    <h1> Lambda Notes</h1>
                </div>
                <div>
                    <Link to="/">
                        <Mybutton className="btn" text = "View your notes"/>
                    </Link>
                    <Link to="/create">
                        <Mybutton className="btn" text = "+ Create new notes"/>
                    </Link>
                </div>
            </div>

            <div className="mainbar">

                <div className = "mainbarHeading">
                    <h2>Edit Note: </h2>
                </div>
                <div className = "titleInput">
                    <Input type="text" name="title" placeholder="Note Title" onChange={this.props.handleTaskChange}  value={this.props.title}  />
                </div>

                <div className = "noteInput">
                    <Input type="text" name="textBody" placeholder="Note Content" onChange={this.props.handleTaskChange} value={this.props.textBody} />
                </div>
                
                <div className = "submitButton">
                <Link to="/">
                    <Mybutton  type="submit" href = "/" onClick={() => this.props.handleUpdate(this.props.id.toString())} className="btn" text = "Update"/>
                    </Link>
                </div>


            </div>
      </div>
    )
  }
};
