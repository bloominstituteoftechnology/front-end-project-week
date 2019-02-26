import React from 'react';

//props from loginview.js
//handleLogout={this.handleLogout}

const Error = props => {

    return(
        <div className="errorWrapper">
            <div className="error">
                <div className="errorArea">
                    <h2>Invalid UserName or Password</h2>
                
                    <button 
                        className="errorButton"
                        onClick={() => {props.handleLogout()}}
                        >Try Again</button>
                    </div>
            </div>
        </div>
    )
}

export default Error