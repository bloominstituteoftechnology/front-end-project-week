import React from 'react';
import { connect } from 'react-redux';

class FullNote extends React.Component {
    constructor(props){
        super(props);
        this.state={
            note: []
        }
    }

    render(){
        if(!this.state.note) return null;
        return(
            <div>
                <h3>edit</h3>
                <h3>delete</h3>
                <h2>Note Name</h2>
                <p>The first ghosts trembled with hope, and their excitement passed back like a ripple over the long line behind them, young children and aged parents alike looking up and ahead with delight and wonder as the first stars they had seen for centuries shown through into their poor starved eyes.The first ghost to leave the world of the dead was Roger. He took a step forward, and turned to look back at Lyra, and laughed in surprise as he found himself turning into the night, the starlight, the air...and then he was gone, leaving behind such a vivid little burst of happiness that Will was reminded of the bubbles in a glass of champagne.</p>
                <p>I will love you forever, whatever happens. Till I die and after I die, and when I find my way out of the land of the dead, I'll drift about forever, all my atoms, till I find you again...I'll be looking for you Will, every moment, every single moment. And when we do find each other again, we'll cling together so tight that nothing and no one'll ever tear us apart. Every atom of me and every atom of you...We'll live in birds and flowers and dragonflies and pine trees and in clouds and in those little specks of light you see floating in sunbeams...And when they use our atoms to make new lives, they won't just be able to take one, they'll have to take two, one of you and one of me, we'll be joined so tight...</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
};

export default connect(mapStateToProps)(FullNote);