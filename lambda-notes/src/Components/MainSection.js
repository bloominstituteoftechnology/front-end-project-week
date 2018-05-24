import React, { Component } from 'react';
import Cards from "./Cards";


class MainSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            notes: [ 
                {title: 'HTML', content: 'HTML was the first week!'}, 
                {title: 'LESS', content: 'Less is more!'},
                {title: 'Javascript', content: 'asldkfjasldkj ;asldjf;alsdjf;laskdf;dfj a;ldskjfalksdf aklsdjf;lakdsjf;lakjdsfl;aksj'},
                {title: 'jQuery', content: 'I hate jQuery it\'s so old!!!  Like flip-phone old!!!!'},
                    ],

         };
    }
    render() {
        return (
            <div className='MainSectionContainer'> 
                <div className='TopText'>Your Notes:</div>
            
                <Cards notesFromState={this.state.notes}/>

            
            
            
            
            
            
            
            
            
            
            
            
            
            </div>
        );
    }
}

export default MainSection;