import React from 'react';
import '../Components/Style.css';



class Logout extends React.Component {
    
    handleLogout() {
        localStorage.removeItem('user')
        localStorage.removeItem('userToken')
        window.location.reload();
    }

    render() {
        return (
            <div>
                <button type = 'logout' onClick = {this.handleLogout}>Logout</button>         
            </div>
        ) 
    }
}

export default Logout;