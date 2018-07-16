import React from 'react';
import { connect } from 'react-redux';
import SidebarComponent from './SidebarComponent';


const SidebarContainer = connect(null)(SidebarComponent);

export default SidebarContainer;