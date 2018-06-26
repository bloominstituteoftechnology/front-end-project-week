import React from 'react'
import { Redirect, withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addNote } from '../actions'
import { Grid, TextField } from '@material-ui/core'
import { SideNav } from '../components'


class Create extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        title: '',
        content: ''
    }

inputChangeHandler = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
}

render() {
    return (
<div>
    <Grid container spacing={40}>
        <Grid item xs={4} sm={3}>
            <SideNav />
        </Grid>
    <Grid item xs={12}>
    <div style={{marginLeft: 'calc(5vw + (150px + 2vw))'}}>
    <h3> Create Note: </h3>
        <form onSubmit={(val) => this.props.addNote(this.state)}>
        {this.props.submitSucceeded ? <Redirect to="/"/> : null}
                <div className="title">
                    <input
                        name="title"
                        value={this.state.title}
                        type="text"
                        placeholder="Note title"
                        style={{border: '1px solid gray', background: 'white', width: '40vw'}}
                        className="title"
                        onChange={this.inputChangeHandler}
                        margin="normal"
                        />
                    </div>
            <div>
                <input
                    name="content"
                    type="text"
                    value={this.state.content}
                    placeholder="Note content"
                    style={{border: '1px solid gray', background: 'white', width: 'calc(90%)'}}
                    margin="normal"
                    multiline={true}
                    onChange={this.inputChangeHandler}
                    rows={14}
                    fullWidth
                />
                <div>
                <button type="submit" className="saveButton">
                    Save
                </button>
                </div>
            </div>
        </form>
        </div>
        </Grid>
        </Grid>
    </div>
    )
    }
}


export default withRouter(connect(null, { addNote })(Create))
