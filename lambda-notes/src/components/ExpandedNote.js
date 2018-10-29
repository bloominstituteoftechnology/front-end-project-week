import React from 'react';
import { Link } from 'react-router-dom';

class ExpandedNote extends React.Component {
    test = () => console.log(this.props);
    

    render() {
        return (
            <div className='expandedNote'>
                <div>
                    <Link to={'/edit'}>edit</Link>
                    <Link to={'/delete'}>delete</Link>
                </div>
                <h1>Note Name</h1>
                <p>Lorem ipsum</p>
            </div>
        )
    }

}

export default ExpandedNote;
