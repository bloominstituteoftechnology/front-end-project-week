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
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
  sortCtrl: {
    width: '100%',
    marginRight: theme.spacing.unit,
    marginBottom: '15px',
  },
  switches: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '15px',
    // border: '1px solid black'
  },
  switch: {
    border: '1px solid black',
  }
});

class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: '',
      labelWidth: 0,
      alphaLabel: 'A-Z',
      lenLabel: 'Ascend',
    };

    this.handleSortChange = this.handleSortChange.bind(this);

  }

  handleSortChange(e) {
    this.setState({ sort: e.target.value });
  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
      <FormControl variant='outlined' className={ classes.sortCtrl }>
        <InputLabel ref={ref => {this.InputLabelRef = ref}} htmlFor='sort'>
          Sort
        </InputLabel>
        <Select onChange={this.handleSortChange} value={this.state.sort} input={<OutlinedInput labelWidth={this.state.labelWidth} name="sort" id="sort"/>}>
          <MenuItem value='None'>None</MenuItem>
          <MenuItem value='Alphabetical'>Alphabetical</MenuItem>
          <MenuItem value='Title Length'>Title Length</MenuItem>
          <MenuItem value='Text Length'>Text Length</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={ classes.switches }>
        <FormControlLabel control={<Switch value="checkedF" color="default"/> } label={this.state.alphaLabel} />
        <FormControlLabel control={<Switch value="checkedF" color="default"/> } label={this.state.lenLabel} />
      </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(Sort);
