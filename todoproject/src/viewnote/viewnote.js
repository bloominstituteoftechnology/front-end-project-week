import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';


class ViewNote extends Component {
    render() {

        return (

            <div className="container2">    
            <h6>Note Name</h6>

            <Link to="/EditNote">
            <button className="button4">edit</button>
            </Link>

            <Link to="/DeleteNote">
            <button className="button5">delete</button>
            </Link>

            <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a pellentesque elit. Suspendisse non blandit tellus. Ut leo dolor, vestibulum nec justo in, hendrerit placerat magna. Aenean sem elit, pulvinar et nulla sit amet, mattis placerat libero. Vivamus ante lacus, interdum quis nunc eu, facilisis mollis quam. Praesent accumsan efficitur elementum. Quisque ornare nulla sit amet facilisis blandit.
            Morbi blandit libero id tellus feugiat finibus. Phasellus in mauris faucibus purus congue faucibus. Sed consectetur tellus nec suscipit scelerisque. Maecenas varius magna non felis convallis, commodo suscipit nunc volutpat. Morbi consectetur, lectus eget aliquet fermentum, turpis libero auctor elit, sed feugiat erat erat non magna. Pellentesque iaculis justo non libero mattis dignissim. Nullam feugiat facilisis volutpat. Morbi ornare dui pulvinar ante aliquam gravida. Sed ut eleifend ante. Nam eu quam vitae ex gravida sagittis. Mauris varius auctor ipsum, eu venenatis libero. Pellentesque in odio non quam pharetra consequat. Morbi varius enim id ligula interdum venenatis.
            </p>
            <p className="content2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a pellentesque elit. Suspendisse non blandit tellus. Ut leo dolor, vestibulum nec justo in, hendrerit placerat magna. Aenean sem elit, pulvinar et nulla sit amet, mattis placerat libero. Vivamus ante lacus, interdum quis nunc eu, facilisis mollis quam. Praesent accumsan efficitur elementum. Quisque ornare nulla sit amet facilisis blandit.
            Morbi blandit libero id tellus feugiat finibus. Phasellus in mauris fauc
            </p>
             
        
            </div>
        )
    }
};

export default ViewNote;