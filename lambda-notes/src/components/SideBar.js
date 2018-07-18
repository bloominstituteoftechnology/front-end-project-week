import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';
import styled from 'styled-components';

const Button = styled.button`
color: white;
display: flex;
justify-content: center;
align-items: center;
background-color: #2BC1C4;
width: 185px;
height: 35px;
`;
const SideBr = styled.div`
display: flex;
    flex-direction: column;
    
align-items: center;
    background-color: #D8D8D8;
    height:100vh;
    width:220px;
    border: solid 1px #979797
`;
const SBarHead = styled.h1`
display: flex;
flex-direction: column;
align-items: flex-start;
font-size: 34px;
    color: black;
`;



// .sideBar {
//     display: flex;
//     flex-direction: column;
//     background-color: #D8D8D8;
//     height:100vh;
//     width:20%;
    
// //   }



// // Each logical "route" has two components, one for
// // the sidebar and one for the main area. We want to
// // render both of them in different places when the
// // path matches the current URL.
// const routes = [
//   {
//     path: "/",
//     exact: true,
//     sidebar: () => <div>listview!</div>,
//     main: () => <h2>Your Notes:</h2>
//   },
//   {
//     path: "/createnote",
//     sidebar: () => <div>new note!</div>,
//     main: () => <h2>Bubblegum</h2>
//   },
//   {
//     path: "/shoelaces",
//     sidebar: () => <div>shoelaces!</div>,
//     main: () => <h2>Shoelaces</h2>
//   }
// ];

// export const SidebarExample = () => (
//   <Router>
//     <div style={{ display: "flex" }}>
//       <div
//         style={{
//           padding: "10px",
//           width: "40%",
//           background: "#D8D8D8"
//         }}
//       >
//         <ul style={{ listStyleType: "none", padding: 0 }}>
//           <button>
//             <Link to="/">View Your Notes</Link>
//           </button>
//           <button>
//             <Link to="/createnote">+Create New Note</Link>
//           </button>
        
//         </ul>

//         {routes.map((route, index) => (
//           // You can render a <Route> in as many places
//           // as you want in your app. It will render along
//           // with any other <Route>s that also match the URL.
//           // So, a sidebar or breadcrumbs or anything else
//           // that requires you to render multiple things
//           // in multiple places at the same URL is nothing
//           // more than multiple <Route>s.
//           <Route
//             key={index}
//             path={route.path}
//             exact={route.exact}
//             component={route.sidebar}
//           />
//         ))}
//       </div>

//       <div style={{ flex: 1, padding: "10px" }}>
//         {routes.map((route, index) => (
//           // Render more <Route>s with the same paths as
//           // above, but different components this time.
//           <Route
//             key={index}
//             path={route.path}
//             exact={route.exact}
//             component={route.main}
//           />
//         ))}
//       </div>
//     </div>
//   </Router>
// );

export const SideBar = () => (
    <SideBr className = 'sideBar'> 
    <SBarHead className = 'sideBarHeading'>Lambda Notes
        </SBarHead>
        <Button> <Link to="/">View Your Notes</Link>
            </Button>
            <Button> <Link to="/createnote">+Create New Note</Link>
            </Button>
        </SideBr>

) 

// export default SidebarExample;
