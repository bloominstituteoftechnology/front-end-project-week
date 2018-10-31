import React from "react";
import axios from 'axios';

class SingleView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            singleNote: props.singleNote
        }
    }
    componentDidMount(){
        handleFetchSingle(this.props.match.params.id)
    }
}
