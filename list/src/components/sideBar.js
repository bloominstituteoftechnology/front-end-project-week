import React, { Component } from "react";
import {Route} from 'react-router-dom';
import  App  from '../App'

export const SideBar = () => (
    <div>
        <Route exact path ="/" component={ App }/>
        {/* <Route exact path ="/addNote" component={ addNote } /> */}
    </div>
)
