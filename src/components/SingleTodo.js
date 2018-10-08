import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
// actions
import { toggleTodo, deleteTodo, archiveTodo } from "../actions/index";
// material components
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// styles
import "../styles/SingleTodos.css";

const styles = theme => ({
    menuItem: {
        fontSize: "1.25rem"
    }
});

// const SingleTodo = props => {
class SingleTodo extends React.Component {
    state = {
        anchorEl: null
    };
    // change a todo's completion status
    handleToggleTodo = id => {
        this.props.toggleTodo(id);
    };
    // delete a todo
    handleDeleteTodo = index => {
        this.props.deleteTodo(index);
    };
    // archive a todo
    handleArchiveTodo = id => {
        this.props.archiveTodo(id);
    };
    // open menu
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    // close menu
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { id } = this.props.todo;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const { classes } = this.props;

        return [
            <Card className="SingleTodo">
                <Link
                    className="SingleTodo_link"
                    to={`/todo/${this.props.index}`}
                >
                    <h3>{this.props.todo.title}</h3>
                </Link>
                <CardContent
                    style={{
                        padding: "0",
                        margin: "10px 0"
                    }}
                >
                    <p
                        className="SingleTodo_content"
                        onClick={() => this.handleToggleTodo(id)}
                        style={{
                            textDecoration: this.props.todo.isComplete
                                ? "line-through"
                                : "none"
                        }}
                    >
                        {/* render a list if listify is true for a todo */}
                        {this.props.todo.listify ? (
                            <ul>
                                {this.props.todo.text.split("\n").map(line => {
                                    return <li>{line}</li>;
                                })}
                            </ul>
                        ) : (
                            this.props.todo.text
                        )}
                    </p>
                    <IconButton
                        onClick={this.handleClick}
                        style={{
                            float: "right",
                            padding: "0",
                            width: "3rem",
                            height: "3rem"
                        }}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={this.handleClose}
                    >
                        <MenuItem className={classes.menuItem}>
                            <Link
                                to={`/todo/${this.props.index}`}
                                style={{
                                    textDecoration: "none",
                                    color: "black"
                                }}
                            >
                                Edit this note
                            </Link>
                        </MenuItem>
                        <MenuItem
                            className={classes.menuItem}
                            onClick={() => {
                                this.handleDeleteTodo(this.props.index);
                                this.props.handleClick(
                                    "Item removed from list"
                                );
                            }}
                        >
                            Delete
                        </MenuItem>
                        <MenuItem
                            className={classes.menuItem}
                            onClick={() => {
                                this.handleArchiveTodo(id);
                                this.props.handleClick("Archived item");
                            }}
                        >
                            Archive
                        </MenuItem>
                    </Menu>
                </CardContent>
            </Card>
        ];
    }
}

export default connect(
    null,
    { toggleTodo, deleteTodo, archiveTodo }
)(withStyles(styles)(SingleTodo));
