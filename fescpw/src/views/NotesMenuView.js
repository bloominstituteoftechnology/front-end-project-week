import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

const styles = {
  list: {
    width: 250,
    paddingTop: 20,
    paddingRight: 0,
    paddingBottom: 30,
    paddingLeft: 0,
    textAlign: "center"
  }
};

class NotesMenuView extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <h2 className={classes.list} style={{fontSize: "1.6rem", fontWeight: "bold"}}>Lambda Notes</h2>
        <Divider style={{margin: 10}} />
        <List><Link to="/notes" style={{ color: "black", textDecoration: "none" }}>View Your Notes</Link></List>
        <Divider style={{margin: 10}} />
        <List><Link to="/notes-form" style={{ color: "black", textDecoration: "none" }}>+ Create New Note</Link></List>
      </div>
    );

    return (
      <div>
        <img 
            src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png" 
            alt="menu"
            style={{width: 40, height: 40, marginTop: 10, marginLeft: 20, cursor: "pointer"}}
            onClick={this.toggleDrawer('left', true)}
        />
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

NotesMenuView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotesMenuView);