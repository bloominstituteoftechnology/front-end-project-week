import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import '../App.css';
import styled from 'styled-components';

const SideBr = styled.div`
    background-color: #D8D8D8;
    height:100vh;
    width:220px;
    border: solid 1px #979797
`;
const SBarHead1 = styled.text`
display: flex;
    justify-content: flex-start;
    margin-left: 15px;
    font-size: 25px;
    margin-top: 20px;
    font-weight: 900;
    color: #4A4A4A;
`;
const SBarHead2 = styled.text`
display: flex;
    justify-content: flex-start;
    margin-left: 15px;
    font-size: 25px;
    margin-bottom: 10px;
    
    font-weight: 900;
    color: #4A4A4A;
    
`;
const StyledLink = styled(Link)`
text-decoration: none;
  color: white;
  
`

const Button = styled.button`
margin-left: 15px;
text-decoration: none;
color: white;
display: flex;
justify-content: center;
align-items: center;
background-color: #2BC1C4;
width: 185px;
height: 35px;
margin-bottom: 15px;



`;

 const SideBar = () => {
     return(
    <SideBr className = 'sideBar'> 
    <SBarHead1 className = 'sideBarHeading'>Lambda
        </SBarHead1>
        <SBarHead2 className = 'sideBarHeading'> Notes
        </SBarHead2>
        <Button> <StyledLink to="/">View Your Notes</StyledLink>
            </Button>
            <Button> <StyledLink to="/createnote">+Create New Note</StyledLink>
            </Button>
        </SideBr>

) 
 }
export default SideBar

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



// export default SidebarExample;
