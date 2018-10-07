import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
// material ui components
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
// actions
import { addTodo } from "../actions/index";
// styles
import "../styles/CreateTodoForm.css";
import "../styles/animation.css";

const styles = theme => ({
    noteInput: {
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

class CreateTodoForm extends Component {
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
    // add new todo to todo list in redux store
    handleAddTodo = () => {
        const { title, text } = this.state;
        this.props.addTodo(title, text);
        // reset form fields
        this.setState({ title: "", text: "" });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className="CreateTodoFormContainer fade">
                <h3 className="CreateTodoForm_header">Create New Note:</h3>
                <form className="CreateTodoForm_form">
                    <Input
                        className={classes.noteInput}
                        name="title"
                        placeholder="Give your note a title"
                        value={this.state.title}
                        disableUnderline={true}
                        onChange={this.handleNewInput}
                    />
                    <Input
                        className={classes.noteInput}
                        name="text"
                        placeholder="Your note here"
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
                            onClick={this.handleAddTodo}
                        >
                            Submit Note
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
        addTodo
    }
)(withStyles(styles)(CreateTodoForm));
