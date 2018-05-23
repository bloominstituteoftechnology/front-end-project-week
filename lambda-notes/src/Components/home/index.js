import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import{Component} from 'react'

class Home extends Component {
   

    render() {
        return (
            <div className='Home'>
                <div className='Home__header'> Your Notes</div>
                <div className='container'>
                    
                    {
                    this.props.notes.map (notes => {
                        return (
                            <div className ='Home__content'>
                                <Link to='/Notes/:id' className='Notes'>
                                    <div className='Note__title'>{notes.title}</div>
                                    <div className='Note__body'>{notes.body}</div>
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