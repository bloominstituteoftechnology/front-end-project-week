import React from 'react';
import './view.css';
import { Link } from 'react-router-dom';

export class ViewNote extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="col-9 right__side">
            <div className="row">
                <div className="col-4 edit">
                    <Link to="/">Edit</Link>
                </div>
                <div className="edit">
                    <Link to="/">Delete</Link>
                </div>
                <h4>Note Title</h4>
            </div>
            <div className="row">
              <p>
                Yr ennui mlkshk heirloom vape fanny pack health goth.
                Kinfolk biodiesel lo-fi synth live-edge bitters squid
                skateboard. Tousled street art snackwave, readymade
                occupy offal organic semiotics taiyaki master cleanse
                yuccie intelligentsia cronut waistcoat bicycle rights.
                Mixtape neutra blue bottle, art party offal live-edge
                mustache marfa. Raw denim glossier green juice shabby
                chic meh edison bulb, typewriter hashtag disrupt
                kickstarter keytar mlkshk. Semiotics banjo flexitarian
                williamsburg chartreuse. Snackwave etsy normcore,
                fashion axe kitsch gastropub fixie pour-over enamel pin
                keffiyeh.
              </p>
              <p>
                Raclette tousled godard, yr bespoke leggings affogato
                plaid hashtag pok pok enamel pin disrupt 3 wolf moon.
                Kitsch meggings deep v, normcore mlkshk fingerstache
                actually poutine kombucha microdosing aesthetic
                chicharrones. Venmo 90's tumeric iPhone mumblecore. La
                croix flannel put a bird on it meggings migas kombucha
                microdosing vice chartreuse twee narwhal.
              </p>
            </div>
          </div>;
    }
}   

