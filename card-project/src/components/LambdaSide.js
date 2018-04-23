import React, { Component}  from 'react';

const bStyle = {
    marginTop: 20,
    backgroundColor: '#25b8bd',
    cursor: 'pointer'
}
const mSt = {
    marginLeft: 10,
    // backgroundColor: 'gray'
    
}
const LambdaSide = (props) => {
	return (
		<div style={mSt} >
			<h1>Lambda Notes</h1>
            <div>
			<button style={bStyle} >View Your Notes</button>
            </div>
            <div>
			<button style={bStyle}>+Create New Note</button>
            </div>
		</div>
	);
};
export default LambdaSide;
