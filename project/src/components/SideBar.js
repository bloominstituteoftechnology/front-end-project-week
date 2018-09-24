import React from 'react';
import './SideBar.css';

const SideBar = (props) => {
return(
<div className="sideBar">
<div className="header">Lambda</div>
<div className="header">Notes</div>
<div className="button" onClick={()=>props.viewall()}>view your notes</div>
<div className="button" onClick={()=>props.adding()}>+ add new note</div>
</div>
)
}

export default SideBar