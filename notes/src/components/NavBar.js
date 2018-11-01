import React from 'react'
import {Route, Link} from 'react-router-dom'
class NavBar extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        search: ''
      }
  }

  changeHandle = (event) => {
    this.setState({search: event.target.value})
    this.props.search(event.target.value)
  }

  render() {
  return (
      <div className="navbar">
        <h1>Lambda Notes</h1>
        <Link to={'/'}>
          <div className='nav-button'>
            <p>View Your Notes</p>
          </div>
        </Link>

        <Link to={'/newNote'}>
          <div className="nav-button">
            <p>+ Create New Note</p>
          </div>
        </Link>
        <input
          className="searchbar"
          placeholder="search"
          onChange={this.changeHandle}
          type='text'
          value={this.state.search}
        ></input>
      </div>
      );
  }
}
// const NavBar = props => {
//   return (
//       <div className="navbar">
//         <h1>Lambda Notes</h1>
//         <Link to={'/'}>
//           <div className='nav-button'>
//             <p>View Your Notes</p>
//           </div>
//         </Link>

//         <Link to={'/newNote'}>
//           <div className="nav-button">
//             <p>+ Create New Note</p>
//           </div>
//         </Link>
//         <input
//           className="searchbar"
//           placeholder="search"
//           onChange={(event) => props.search(event)}
//           type='text'
//           value=''
//         ></input>
//       </div>
//       );
// };
export default NavBar;
