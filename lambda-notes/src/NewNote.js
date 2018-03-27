import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class NewNote extends React.Component {
    render() {
      return (
        <div>
          <Link to="/">
            <button>Back Home</button>
              </Link>
                <form>
                  <input placeholder="Note Title" />
                  <input placeholder=" Note Content" />
                <Button type="submit">Save</Button>
              </form>        
        </div>
      );
    }
  }
  
  export default NewNote;