import React, {Component} from 'react';
import './Notes.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const SideBar = props  => {
return (
<div className='sidecontainer'>
<h1> Lambda Notes </h1>
<Link to ='/'>
<button className='viewnotes'> View Notes </button>
</Link>

<Link to ='/addnote'>
<button className='addanotebutton'> +Add a Note </button>
</Link>

    </div>

)
}

export default SideBar;