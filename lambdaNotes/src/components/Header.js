import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a className="left brand-logo">
                            Lambda Notes
                        </a>
                        <ul className="right">
                            <li>
                                <a>Login With Google</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;