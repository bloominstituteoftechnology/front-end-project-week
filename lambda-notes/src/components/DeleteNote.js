import React from 'react';

Class DeleteNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const id= this.props.match.params.id;
        this.props.handleSetCurrent(id);
    }

    render() {
        return (

        )
    }
}