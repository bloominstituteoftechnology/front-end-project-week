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
import { connect } from 'react-redux';
import { noteSort, noteFilter } from './actions/index';

const styles = theme => ({
  container: {
    width: '280px',
    height: '600px',
    marginRight: '20px',
    minWidth: '280px',
  },
  paperCtr: {
    width: '265px',
    minHeight: '360px',
    height: '65vh',
    maxHeight: '600px',
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
    margin: '15px auto  auto',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: '1',
  },
});

class Options extends Component {
  constructor(props) {
    super(props);

    this.handleSort = this.handleSort.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleExport = this.handleExport.bind(this);
  }

  handleSort(sortNotes) {
    this.props.noteSort(sortNotes);
  }

  handleSwitch(sortNotes) {
    this.props.noteSort(sortNotes);
  }

  handleFilter(filterNotes) {
    this.props.noteFilter(filterNotes);
  }

  handleExport() {

    this.props.exportCsv(this.props.notes);
  }

  render() {

    const { classes } = this.props;

    return (
      <div className={ classes.container }>
      <Paper classes={{ root: classes.paperCtr }}>
        <form className={ classes.form }>
          <Sort handleSort={this.handleSort} handleSwitch={this.handleSwitch} sortNotes={this.props.sortNotes}/>
          <Filter handleFilter={this.handleFilter} filterNotes={this.props.filterNotes} />
          <Tags notes={ this.props.notes }/>
        </form>
        <Button onClick={ this.handleExport } color='secondary' variant='outlined' size='large' className={ classes.exportBtn }>Export All</Button>
      </Paper>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    sortNotes: state.sortNotes,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    noteSort: (sortNotes) => {
      dispatch(noteSort(sortNotes));
    },
    noteFilter: (filterNotes) => {
      dispatch(noteFilter(filterNotes));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Options));
