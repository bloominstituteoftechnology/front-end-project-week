import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <button 
                style={{ 
                    height: '50px', 
                    width: '200px', 
                    border: '#979797',
                    backgroundColor: 'rgb(43, 193, 196)',
                     }}/>
         )
    }
}
 
export default Test;