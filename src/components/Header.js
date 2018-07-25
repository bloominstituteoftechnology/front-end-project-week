import React from 'react';
import {NavLink} from 'react-router-dom';

// This stateless function replaced code right below it
const Header = (props) => {
  return (
    <div className="header header-container">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
        <NavLink to="/create" activeClassName="is-active">Create New Note</NavLink>
        <button className="switch-page-button">Create New Note</button>
        {/* if props.subtitle is provided then run props.subtitle if not don't */}
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
      </div>
    </div>
  )
  };
  // set default title prop which means we can go ahhead and remove title from Header componenet (props.title)
  Header.defaultProps = {
  title: 'Lambda Notes'
  };
  
  
  // class Header extends React.Component {
  //     render() {
  //         return(
  //         <div>
  //         {/* to access/call your prop you made in the indecsion app you use the keyword "this"followed by "props" followed by the prop name/key in this case its "title" all put inside the curly braces "{}" props can be also brought in from Variables for example cons ttile = "Indecision"*/}
  //     <h1>{this.props.title}</h1>
  //     <h2>{this.props.subtitle}</h2>
  //         </div>
  //    )
  //   }
  // }

  export default Header