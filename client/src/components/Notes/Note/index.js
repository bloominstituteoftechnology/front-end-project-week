import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Note extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography variant='h5'>
              Title
            </Typography>

            <Typography variant='title'>
              Content Content
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button>
            Edit
          </Button>

          <Button>
            Delete
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Note;
