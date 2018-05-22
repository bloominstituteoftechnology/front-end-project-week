import React, {
  Component
} from 'react';
import Notes from '../../components/Main/Notes/Notes';
import Aside from '../../components/Aside/Aside';

class ListViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [
        {
          id: 1,
          title: 'CARD title 1',
          message: 'MESSAGE 1 fasdfasdfasfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',
        },
        {
          id: 2,
          title: 'CARD title 2',
          message: 'MESSAGE 2 asdfasdfasdfasdfasdfasdfaklsjdfasdfhajskdflasdfhaksdjfhalksdfhasdhfj',
        },
        {
          id: 3,
          title: 'CARD title 3',
          message: 'MESSAGE 3 asdfasdfasdfasdfasdfasdfaklsjdfasdfhajskdflasdfhaksdjfhalksdfhasdhfj',
        },
        {
          id: 4,
          title: 'CARD title 4',
          message: 'MESSAGE 4 asdfasdfasdfasdfasdfasdfaklsjdfasdfhajskdflasdfhaksdjfhalksdfhasdhfj',
        },
        {
          id: 5,
          title: 'CARD title 5',
          message: 'MESSAGE 5 asdfasdfasdfasdfasdfasdfaklsjdfasdfhajskdflasdfhaksdjfhalksdfhasdhfj',
        },
        {
          id: 6,
          title: 'CARD title 6',
          message: 'MESSAGE 6 asdfasdfasdfasdfasdfasdfaklsjdfasdfhajskdflasdfhaksdjfhalksdfhasdhfj',
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <Aside />
        <Notes notes={this.state.notes} />
      </div>  
    );
  }
}

export default ListViewContainer;