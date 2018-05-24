import React, { Component } from 'react';
import Cards from "./Cards";


class MainSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            notes: [ 
                {title: 'HTML', content: 'HTML was the first week!', id: 0}, 
                {title: 'LESS', content: 'Less is more!', id: 1},
                {title: 'Javascript', content: 'asldkfjasldkj ;asldjf;alsdjf;laskdf;dfj a;ldskjfalksdf aklsdjf;lakdsjf;lakjdsfl;aksj', id: 2},
                {title: 'jQuery', content: 'I hate jQuery it\'s so old!!!  Like flip-phone old!!!!', id: 3},
                    ],

         };
    }

    render() {
        return (
            <div className='TemplateContainer'> 
                <div className='TopText'>Your Notes:</div>
            
                <Cards notesFromState={this.state.notes}/>           
            
            </div>
        );
    }
}

export default MainSection;