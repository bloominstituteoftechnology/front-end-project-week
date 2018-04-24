import React from 'react';
import './components.css'

const LeftBox = () => {
        return(
            <div className="LeftBox">
                <div className="LeftBox__TitleContainer"><div className="LeftBox__Title">Lambda</div></div>
                <div className="LeftBox__TitleContainer"><div className="LeftBox__Title">Notes</div></div>
                <div className="LeftBox__Button1">View Your Notes</div>
                <div className="LeftBox__Button2">+ Create New Note</div>
            </div>
        )
    }

export default LeftBox;