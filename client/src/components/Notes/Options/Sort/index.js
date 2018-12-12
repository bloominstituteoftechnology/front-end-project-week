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
      alphaSwitch: true,
      lenSwitch: true,
    };

    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleSwitchChange = this.handleSwitchChange.bind(this);

  }

  handleSortChange(e) {
    this.setState({ sort: e.target.value });

    let sortNotes;
    switch (e.target.value) {
      case 'None':
        this.setState({ alphaSwitch: true, lenSwitch: true, });

        sortNotes = {
          newest: false,
          alpha: {
            sort: false,
            dir: this.props.sortNotes.alpha.dir,
          },
          title: {
            sort: false,
            dir: this.props.sortNotes.title.dir,
          },
          text: {
            sort: false,
            dir: this.props.sortNotes.text.dir,
          }
        }
        break;
      case 'Newest':
        this.setState({ alphaSwitch: true, lenSwitch: true, });

        sortNotes = {
          newest: true,
          alpha: {
            sort: false,
            dir: this.props.sortNotes.alpha.dir,
          },
          title: {
            sort: false,
            dir: this.props.sortNotes.title.dir,
          },
          text: {
            sort: false,
            dir: this.props.sortNotes.text.dir,
          }
        }
        break;
      case 'Alphabetical':

        this.setState({ alphaSwitch: false, lenSwitch: true, });

        sortNotes = {
          newest: false,
          alpha: {
            sort: true,
            dir: this.props.sortNotes.alpha.dir,
          },
          title: {
            sort: false,
            dir: this.props.sortNotes.title.dir,
          },
          text: {
            sort: false,
            dir: this.props.sortNotes.text.dir,
          }
        }
        break;
      case 'Title Length':

        this.setState({ alphaSwitch: true, lenSwitch: false, });

        sortNotes = {
          newest: false,
          alpha: {
            sort: false,
            dir: this.props.sortNotes.alpha.dir,
          },
          title: {
            sort: true,
            dir: this.props.sortNotes.title.dir,
          },
          text: {
            sort: false,
            dir: this.props.sortNotes.text.dir,
          }
        }
        break;
      case 'Text Length':

        this.setState({ alphaSwitch: true, lenSwitch: false, });

        sortNotes = {
          newest: false,
          alpha: {
            sort: false,
            dir: this.props.sortNotes.alpha.dir,
          },
          title: {
            sort: false,
            dir: this.props.sortNotes.title.dir,
          },
          text: {
            sort: true,
            dir: this.props.sortNotes.text.dir,
          }
        }
        break;
      default:
        sortNotes = this.props.sortNotes;
        break;
    }

    this.props.handleSort(sortNotes);
  }

  handleSwitchChange(e) {

    let sortNotes;
    switch (e.target.value) {
      case 'alphaLabel':
        if (this.state.alphaLabel === 'A-Z') {
          this.setState({ alphaLabel: 'Z-A' })
          sortNotes = {
            newest: false,
            alpha: {
              sort: this.props.sortNotes.alpha.sort,
              dir: 'Z-A',
            },
            title: {
              sort: this.props.sortNotes.title.sort,
              dir: this.props.sortNotes.title.dir,
            },
            text: {
              sort: this.props.sortNotes.text.sort,
              dir: this.props.sortNotes.text.dir,
            }
          }

        } else {
          this.setState({ alphaLabel: 'A-Z' })
          sortNotes = {
            newest: false,
            alpha: {
              sort: this.props.sortNotes.alpha.sort,
              dir: 'A-Z',
            },
            title: {
              sort: this.props.sortNotes.title.sort,
              dir: this.props.sortNotes.title.dir,
            },
            text: {
              sort: this.props.sortNotes.text.sort,
              dir: this.props.sortNotes.text.dir,
            }
          }
        }
        break;
      case 'lenLabel':
      if (this.state.sort === 'Title Length') {
        if (this.state.lenLabel === 'Ascend') {
          this.setState({ lenLabel: 'Descend' });
          sortNotes = {
            newest: false,
            alpha: {
              sort: this.props.sortNotes.alpha.sort,
              dir: this.props.sortNotes.alpha.dir,
            },
            title: {
              sort: this.props.sortNotes.title.sort,
              dir: 'Descend',
            },
            text: {
              sort: this.props.sortNotes.text.sort,
              dir: this.props.sortNotes.text.dir,
            }
          }
        } else {
          this.setState({ lenLabel: 'Ascend' });
          sortNotes = {
            newest: false,
            alpha: {
              sort: this.props.sortNotes.alpha.sort,
              dir: this.props.sortNotes.alpha.dir,
            },
            title: {
              sort: this.props.sortNotes.title.sort,
              dir: 'Ascend',
            },
            text: {
              sort: this.props.sortNotes.text.sort,
              dir: this.props.sortNotes.text.dir,
            }
          }
        }
      } else if (this.state.sort === 'Text Length') {
        if (this.state.lenLabel === 'Ascend') {
          this.setState({ lenLabel: 'Descend' });
          sortNotes = {
            newest: false,
            alpha: {
              sort: this.props.sortNotes.alpha.sort,
              dir: this.props.sortNotes.alpha.dir,
            },
            title: {
              sort: this.props.sortNotes.title.sort,
              dir: this.props.sortNotes.title.dir,
            },
            text: {
              sort: this.props.sortNotes.text.sort,
              dir: 'Descend',
            }
          }
        } else {
          this.setState({ lenLabel: 'Ascend' });
          sortNotes = {
            newest: false,
            alpha: {
              sort: this.props.sortNotes.alpha.sort,
              dir: this.props.sortNotes.alpha.dir,
            },
            title: {
              sort: this.props.sortNotes.title.sort,
              dir: this.props.sortNotes.title.dir,
            },
            text: {
              sort: this.props.sortNotes.text.sort,
              dir: 'Ascend',
            }
          }
        }
      }
    }
    this.props.handleSort(sortNotes);





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
          <MenuItem value='Newest'>Newest</MenuItem>
          <MenuItem value='Alphabetical'>Alphabetical</MenuItem>
          <MenuItem value='Title Length'>Title Length</MenuItem>
          <MenuItem value='Text Length'>Text Length</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={ classes.switches }>
        <FormControlLabel disabled={this.state.alphaSwitch} control={<Switch onChange={this.handleSwitchChange} value="alphaLabel" color="default"/> } label={this.state.alphaLabel} />
        <FormControlLabel disabled={this.state.lenSwitch} control={<Switch onChange={this.handleSwitchChange} value="lenLabel" color="default"/> } label={this.state.lenLabel} />
      </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(Sort);
