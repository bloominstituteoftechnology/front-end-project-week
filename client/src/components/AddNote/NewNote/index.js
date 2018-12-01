import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import TagModal from './TagModal/index';
import Tags from './Tags/index';

const styles = {
  root: {
    color: 'white',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px',
  },
  title: {
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  titleField: {
    width: '300px',
    backgroundColor: '#EEEEEE',
  },
  textField: {
    width: '100%',
    backgroundColor: '#EEEEEE',
    marginRight: '10px',
  },
  titleLabel: {
    textAlign: 'center',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // border: '1px solid black',
    fontSize: '28px',
  },
  buttons: {
    marginTop: '15px',
    flex: '1',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px 30px 0 30px',
  },
  button: {
    width: '80px',
  },
  buttonText: {
    // color: 'white',
  },
  navLink: {
    outline: 'none',
    textDecoration: 'none',
    color: 'inherit',
    border: 'none',
  },
  container: {
    display: 'flex',

  },
  tags: {
  }
}

class NewNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      text: this.props.text,
      tags: [],
      anchorEl: null,
      tagModalOpen: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleTagOpen = this.handleTagOpen.bind(this);
    this.handleTagClose = this.handleTagClose.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
  }

  handleMenuClick(e) {
    this.setState({ anchorEl: e.currentTarget });
  }

  handleMenuClose() {
    this.setState({ anchorEl: null });
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSaveClick() {
    this.props.handleSave(this.state.title, this.state.text, this.state.tags);
    this.props.openModal();
  }

  handleTagOpen() {
    this.setState({ tagModalOpen: true });
  }

  handleTagClose() {
    this.setState({ tagModalOpen: false });
    this.handleMenuClose();
  }

  handleAddTag(tag) {
    const tags = this.state.tags;
    tags.push(tag);
    this.setState({
      tags,
    });
    this.handleMenuClose();
  }

  render() {

    const { classes } = this.props;

    return (
      <Paper className={ classes.paper }>
        <TagModal handleAddTag={ this.handleAddTag } handleTagOpen={ this.handleTagOpen } handleTagClose={ this.handleTagClose } open={ this.state.tagModalOpen }/>
        <form>
          <div className={classes.title}>
            <TextField name='title' value={this.state.title} onChange={this.handleChange} className={classes.titleField} variant='outlined' placeholder='Title' />
            <Typography variant='h4' classes={{ root: classes.titleLabel }}>
              Add Note
            </Typography>

            <Tooltip title='Add'>
              <IconButton aria-owns={ this.state.anchorEl ? 'simple-menu' : undefined } aria-label='Add' aria-haspopup="true" onClick={this.handleMenuClick}>
                <AddIcon fontSize='large' />
              </IconButton>
            </Tooltip>

            <Menu id="simple-menu" anchorEl={this.state.anchorEl} open={Boolean(this.state.anchorEl)} onClose={this.handleMenuClose}>
              <MenuItem onClick={this.handleMyAccount}>Check list</MenuItem>
              <MenuItem onClick={this.handleTagOpen}>Tag</MenuItem>
            </Menu>

          </div>
          <div className={ classes.container }>
            <TextField name='text' multiline rows='20' rowsMax="20" value={this.state.text} onChange={this.handleChange} className={classes.textField} variant='outlined' placeholder='Content' />
            <Tags tags={ this.state.tags } />
          </div>

          <div className={classes.buttons}>
            <Button onClick={ this.handleSaveClick } variant='outlined' size='small' color='primary' className={ classes.button }>
              <Typography color='primary' variant='button' className={ classes.buttonText }>
                Save
              </Typography>
            </Button>

            <NavLink className={ classes.navLink } to='/Notes/New/Preview'>
              <Button onClick={ () => { this.props.handlePreview(this.state.title, this.state.text) }} size='small' variant='outlined' color='secondary' className={ classes.button }>
                <Typography color='secondary' variant='button' className={ classes.buttonText }>
                  Preview
                </Typography>
              </Button>
            </NavLink>
          </div>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(NewNote);
