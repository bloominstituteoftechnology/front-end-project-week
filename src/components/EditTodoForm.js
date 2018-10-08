import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
// material ui components
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
// actions
import { updateTodo } from "../actions/index";
// styles
import "../styles/CreateTodoForm.css";
import "../styles/EditTodoForm.css";
import "../styles/animation.css";

const styles = theme => ({
    editNoteInput: {
        border: "2px solid #26c6da",
        borderRadius: "5px",
        padding: "10px",
        fontSize: "1.5rem",
        marginBottom: "20px",
        width: "100%"
    },
    button: {
        width: "40%",
        backgroundColor: "#26c6da",
        fontSize: "1.75rem",
        fontWeight: "700",
        color: "white",
        letterSpacing: "0.2rem",
        "&:hover": {
            backgroundColor: "black"
        }
    }
});

class EditTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: ""
        };
    }
    // capture new todo data
    handleNewInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    // update an existing todo
    handleUpdateTodo = id => {
        const { title, text } = this.state;
        this.props.updateTodo(id, title, text);
        this.setState({ title: "", text: "" });
    };
    // listify a todos text content
    handleListifyTodo = id => {
        const { text } = this.state;
        const idHash = this.props.todos[id].id;
        this.props.listifyTodo(idHash, text);
    };

    render() {
        const { id } = this.props.location.state;
        const { classes } = this.props;

        return (
            <div className="EditTodoFormContainer fade">
                <h3 className="EditTodoForm_header">Edit Note:</h3>
                <form classSName="EditTodoForm_form">
                    <Input
                        className={classes.editNoteInput}
                        name="title"
                        placeholder={this.props.todos[parseInt(id, 10)].title}
                        value={this.state.title}
                        disableUnderline={true}
                        onChange={this.handleNewInput}
                    />
                    <Input
                        className={classes.editNoteInput}
                        name="text"
                        placeholder={this.props.todos[parseInt(id, 10)].text}
                        value={this.state.text}
                        multiline
                        rows="10"
                        disableUnderline={true}
                        onChange={this.handleNewInput}
                    />
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Button
                            variant="contained"
                            className={classes.button}
                            onClick={() => {
                                this.handleUpdateTodo(id);
                            }}
                        >
                            Edit Your Note
                        </Button>
                    </Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps,
    {
        updateTodo
    }
)(withStyles(styles)(EditTodoForm));
