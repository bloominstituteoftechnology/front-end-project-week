import React from 'react';
import './components.css'
import { Link } from 'react-router-dom';

const LeftBox = () => {
        return(
            <div className="LeftBox">
                <div className="LeftBox__TitleContainer"><div className="LeftBox__Title">Lambda</div></div>
                <div className="LeftBox__TitleContainer"><div className="LeftBox__Title">Notes</div></div>
                <Link to="/"><div className="LeftBox__Button1" Link to ="/view">View Your Notes</div></Link>
                <Link to="/create"><div className="LeftBox__Button2">+ Create New Note</div></Link>
            </div>
        )
    }

export default LeftBox;