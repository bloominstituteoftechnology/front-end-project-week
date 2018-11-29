import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Sort from './Sort/index';
import Filter from './Filter/index';
import Tags from './Tags/index';

const styles = theme => ({
  container: {
    width: '280px',
    height: '600px',
    marginRight: '20px',
    minWidth: '280px',
  },
  paperCtr: {
    width: '265px',
    height: '600px',
    marginRight: '20px',
    position: 'fixed',
    marginTop: '10px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  exportBtn: {
    margin: '15px auto 0px auto',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});

class Options extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { classes } = this.props;

    return (
      <div className={ classes.container }>
      <Paper classes={{ root: classes.paperCtr }}>
        <form className={ classes.form }>
          <Sort />
          <Filter />
          <Tags />
        </form>
        <Button color='secondary' variant='outlined' size='large' className={ classes.exportBtn }>Export All</Button>
      </Paper>
      </div>
    );
  }

}

export default withStyles(styles)(Options);
