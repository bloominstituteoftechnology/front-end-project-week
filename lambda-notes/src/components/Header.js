import React from "react";

class Header extends React.Component {

  render() {
    return (
      <header>
        <nav>
          <div>
            Logo
          </div>
          <div>
            search
          </div>
          <div>
            signup
          </div>
          <div>
            login
          </div>
          <div>
            logout
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;