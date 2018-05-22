import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/ListView.css'

const ListView = props => {
    return (
       <div className="main-text">
        <div className="row yourNotes">
            <h3 style={{textAlign: "left"}}> Your Notes: </h3>
            </div>
        <div className="row mein-row no-gutters">
        <NavLink to="/note/1"><div className="card mein-card">
            <div className="card-body">
                <h5 className="card-title"> Note Title </h5>
                <p className="card-text"> Morbi pellentesque euismod venenatis.  Nulla ut nibh nunc.  Phasellus diam metus. blandit ac purus a. efficitur mollis .. </p>
            </div>
        </div></NavLink>
        <NavLink to="/note/2"><div className="card mein-card">
            <div className="card-body">
                <h5 className="card-title"> Note Title </h5>
                <p className="card-text"> Morbi pellentesque euismod venenatis.  Nulla ut nibh nunc.  Phasellus diam metus. blandit ac purus a. efficitur mollis .. </p>
            </div>
        </div></NavLink>
        <NavLink to="/note/3"><div className="card mein-card">
            <div className="card-body">
                <h5 className="card-title"> Note Title </h5>
                <p className="card-text"> Morbi pellentesque euismod venenatis.  Nulla ut nibh nunc.  Phasellus diam metus. blandit ac purus a. efficitur mollis .. </p>
            </div>
        </div></NavLink>
        </div>
        <div className="row mein-row no-gutters">
        <NavLink to="/note/4"><div className="card mein-card">
            <div className="card-body">
                <h5 className="card-title"> Note Title </h5>
                <p className="card-text"> Morbi pellentesque euismod venenatis.  Nulla ut nibh nunc.  Phasellus diam metus. blandit ac purus a. efficitur mollis .. </p>
            </div>
        </div></NavLink>
        <NavLink to="/note/5"><div className="card mein-card">
            <div className="card-body">
                <h5 className="card-title"> Note Title </h5>
                <p className="card-text"> Morbi pellentesque euismod venenatis.  Nulla ut nibh nunc.  Phasellus diam metus. blandit ac purus a. efficitur mollis .. </p>
            </div>
        </div></NavLink>
        <NavLink to="/note/6"><div className="card mein-card">
            <div className="card-body">
                <h5 className="card-title"> Note Title </h5>
                <p className="card-text"> Morbi pellentesque euismod venenatis.  Nulla ut nibh nunc.  Phasellus diam metus. blandit ac purus a. efficitur mollis .. </p>
            </div>
        </div></NavLink>
        </div>
        <div className="row mein-row no-gutters">
        <NavLink to="/note/7"><div className="card mein-card">
            <div className="card-body">
                <h5 className="card-title"> Note Title </h5>
                <p className="card-text"> Morbi pellentesque euismod venenatis.  Nulla ut nibh nunc.  Phasellus diam metus. blandit ac purus a. efficitur mollis .. </p>
            </div>
        </div></NavLink>
        <NavLink to="/note/8"><div className="card mein-card">
            <div className="card-body">
                <h5 className="card-title"> Note Title </h5>
                <p className="card-text"> Morbi pellentesque euismod venenatis.  Nulla ut nibh nunc.  Phasellus diam metus. blandit ac purus a. efficitur mollis .. </p>
            </div>
        </div></NavLink>
        <NavLink to="/note/9"><div className="card mein-card">
            <div className="card-body">
                <h5 className="card-title"> Note Title </h5>
                <p className="card-text"> Morbi pellentesque euismod venenatis.  Nulla ut nibh nunc.  Phasellus diam metus. blandit ac purus a. efficitur mollis .. </p>
            </div>
            </div></NavLink>
            </div>
        </div>
    )
}

export default ListView