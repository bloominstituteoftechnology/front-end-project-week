import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  tags: {
    maxHeight: '300px',
    flex: '1',
    padding: '0px 0px 20px 18px',
    border: '1px solid #bdbdbd',
    borderRadius: 4,
    '&:hover': {
      border: '1.2px solid',
      '&:focus': {
        border: '1.4px solid #3f51b5',
      }
    },
  },
  tagLabel: {
    marginLeft: '10px',
  },
  scrollBar: {
    margin: '0px 0px 15px 0px',
    borderRadius: '4px',
  }
});

class Tags extends Component {
  constructor(props) {
    super(props);

    this.getTags = this.getTags.bind(this);

  }

  getTags() {

    const tags = [];

    for (let i in tags) {
      for (let j in this.props.notes.tags) {
        tags[i] !== this.props.notes.tags[j] && tags.push(this.props.notes.tags[j]);
      }
    }
    return tags.map(tag => <FormControlLabel control={ <Checkbox /> } label={tag} />);
  }

  render() {

    const { classes } = this.props;

    return (
      <FormControl component="fieldset" className={ classes.tags }>
          <FormLabel component="legend" className={ classes.tagLabel }>Tags:</FormLabel>
          <Scrollbars className={ classes.scrollBar }>
            <FormGroup>
              <FormControlLabel control={ <Checkbox /> } label='Tag One' />
              <FormControlLabel control={ <Checkbox /> } label='Tag Two' />
              <FormControlLabel control={ <Checkbox /> } label='Tag Three' />
              {this.getTags()}
            </FormGroup>
          </Scrollbars>
        </FormControl>
    );
  }
}

export default withStyles(styles)(Tags);
