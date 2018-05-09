import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AddNote from './AddNote';
import ListView from './ListView';


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [{
                path: "/view",
                exact: true,
                sidebar: () => <div>View Your Notes</div>,
                main: () => <ListView notes={this.props.notes} viewNote={this.props.viewNote} />
            },
            {
                path: "/create",
                sidebar: () => <div>+ Create New Note</div>,
                main: () => <AddNote addNote={this.props.addNote} />
            }]
        }
    }

    render() {
        return (
            <Router>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                        padding: "10px",
                        width: "40%",
                        background: "#f0f0f0"
                        }}
                    >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li>
                        <Link to="/view">View Your Notes</Link>
                        </li>
                        <li>
                        <Link to="/create">+ Create New Note</Link>
                        </li>
                    </ul>

                    {/* {routes.map((route, index) => (
                        <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.sidebar}
                    />
                    ))} */}
                </div>
                <div style={{ flex: 1, padding: "10px" }}>
                    {this.state.routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
                </div>
            </div>
        </Router>
    )}
}

export default Sidebar;