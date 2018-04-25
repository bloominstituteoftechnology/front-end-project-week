import React, { Component } from 'react';
// import { Button, Form, FormGroup, Input, Label, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Nav, NavItem, /* NavLink */ } from 'reactstrap';


 const ViewNote = (props) => {
    return(
        <div >
            <Nav>
                <NavItem className="Update_Delete float-right">
                    <Link to="/UpdateNote"> edit </Link>
                    <Link to="/DeleteNote"> delete </Link>
                </NavItem>
            </Nav>
            
            <h4 className='text-left pl-4 pt-3 '> Note Name: </h4>
            <div className="ViewNote p-4 h4 font-weight-normal">
                <p className="m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius libero eget libero gravida pretium sed at erat. Curabitur suscipit metus tortor, sit amet bibendum nulla molestie sit amet. In scelerisque libero risus, auctor porttitor nulla fermentum et. Mauris varius ullamcorper augue non laoreet. Duis in velit ut mi viverra pharetra sed tempus enim. Integer sed dolor ante. Vestibulum ut ultricies enim, sit amet placerat eros. In interdum sollicitudin neque, sit amet sagittis elit consequat a. Praesent eu eros et ante efficitur dapibus. Sed sit amet pulvinar elit. Nulla quis sapien ac enim suscipit sagittis a ut leo. Phasellus eget sem efficitur, semper dui eu, placerat nibh.</p>
                <p className="m-2 mt-4">Suspendisse potenti. Morbi at justo a risus interdum aliquam. Donec ultricies felis id condimentum consectetur. Proin sit amet malesuada dui, quis tristique ipsum. Mauris in est dignissim, ullamcorper nunc ut, luctus ipsum. Vestibulum a massa luctus, lobortis diam vel, venenatis orci. Fusce sit amet nibh eget elit faucibus imperdiet sed in nunc. Fusce tortor est, varius non sem eget, mattis rutrum risus.</p>
                
                {/* {props.notes.map(note => {
                    return(
                        <div>
                            <div>{props.title}</div>
                            <div>{props.content} </div>
                        </div>
                    );
                })} */}
            </div>     
        </div>
    )} 
    

export default ViewNote;