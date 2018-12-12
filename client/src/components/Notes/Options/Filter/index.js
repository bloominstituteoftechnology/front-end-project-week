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

const styles = theme => ({
  filterCtrl: {
    width: '100%',
    marginRight: theme.spacing.unit,
    marginBottom: '15px',
    minHeight: '56px',
  }
});

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      labelWidth: 0,
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);

  }

  handleFilterChange(e) {
    this.setState({ filter: e.target.value });

    this.props.handleFilter({ textLength: e.target.value });

  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  render() {

    const { classes } = this.props;

    return (
      <FormControl variant='outlined' className={ classes.filterCtrl }>
        <InputLabel ref={ref => {this.InputLabelRef = ref}} htmlFor='filter'>
          Filter
        </InputLabel>
        <Select onChange={this.handleFilterChange} value={this.state.filter} input={<OutlinedInput labelWidth={this.state.labelWidth} name="filter" id="filter"/>}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={50}>{`Length > 50`}</MenuItem>
          <MenuItem value={100}>{`Length > 100`}</MenuItem>
          <MenuItem value={250}>{`Length > 250`}</MenuItem>
          <MenuItem value={500}>{`Length > 500`}</MenuItem>
          <MenuItem value={1000}>{`Length > 1000`}</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(Filter);
