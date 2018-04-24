import React, { Component}  from 'react';
import { Link } from 'react-router-dom';

const bStyle = {
    marginTop: 10,
    fontSize: 20,
    marginBottom: 10,
    backgroundColor: '#25b8bd',
    cursor: 'pointer',
    width: '85%',
    color: 'white',
    height: 50,
    fontWeight: 'bold'
}
const mSt = {
    marginLeft: '7.5%',
    // backgroundColor: 'gray'
    
}
const hSt = {
    fontWeight: 'bold',

}
const LambdaSide = (props) => {
	return (
		<div style={mSt} >
        <div>
			<h1 style={hSt}>Lambda <br/>Notes </h1>
            </div>
            {/* <div> */}
                <Link to="/">
			<button style={bStyle} >View Your Notes</button>
            </Link>
            {/* </div> */}
            {/* <div> */}
            <Link to='/notes/new'>
			<button style={bStyle}>+ Create New Note</button>
            </Link>
            {/* </div> */}
		</div>
	);
};
export default LambdaSide;
