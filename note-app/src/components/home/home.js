import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';


class Home extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='Home'>
                <div className='Home__header'> Your Notes</div>
                <div className='container'>
                {this.props.notes.map(n => {
                    return (
                        <div className='Home__content'>
                            <Link to='/note/:id' className='Note'>
                                <div className='Note__title'>{n.title}</div>
                                <div className='Note__body'>{n.body}</div>
                            </Link>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}
export default Home;