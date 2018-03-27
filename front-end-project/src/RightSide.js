import React, {Component} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class RightSide extends React.Component {
    state = {
        cards: null,
    }
    render(){
        return( 
            <div className='rightSide'>
                <NavLink to = '/'>
                <p className='RS-title'>Your Notes:</p>
                <div className = 'allCards'>
                <div className='card1'>
                <t className='t'>Note Title</t>
                <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
                </div>
                <div className='card2'>
                <t className='t'>Note Title</t>
                <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
                </div>
                <div className='card3'>
                <t className='t'>Note Title</t>
                <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
                </div>
                <div className='card4'>
                <t className='t'>Note Title</t>
                <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
                </div>
                <div className='card5'>
                <t className='t'>Note Title</t>
                <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
                </div>
                <div className='card6'>
                <t className='t'>Note Title</t>
                <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
                </div>
                <div className='card7'>
                <t className='t'>Note Title</t>
                <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
                </div>
                <div className='card8'>
                <t className='t'>Note Title</t>
                <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
                </div>
                <div className='card9'>
                <t className='t'>Note Title</t>
                <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
                </div>
                </div>
                </NavLink>
            </div>
        );
}
}