import React from 'react';
import './view.css';
import { Route, Link, Switch } from 'react-router-dom';
import { EditNote } from '../EditNote';
// import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export class ViewNote extends React.Component {
    render() {
        return <div className="col-9 right__side">
            <div className="row">
              <div className="col-4 edit">
                <Link to="/editnote">Edit</Link>
                <Route path="/editnote" render={EditNote}/>
              </div>
              <div className=" col-3 delete">
                <Link to="/">Delete</Link>
              </div>
            </div>
            <div className="row">
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

