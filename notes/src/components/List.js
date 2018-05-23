import React, { Component } from 'react';
import axios from 'axios';
import ListCard from './ListCard';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List: null
        };
    }

    componentDidMount() {
        // change this line to grab the id passed on the URL
        const { id } = this.props.match.params;
        this.fetchList(id);
    }

    fetchMovie = id => {
        axios
            .get(`http://localhost:3000/api//${id}ListCard`)
            .then(response => {
                this.setState(() => ({ List: response.data }));
            })
            .catch(error => {
                console.error(error);
            });
    };
    // Uncomment this code when you're ready for the stretch problems
    // componentWillReceiveProps(newProps) {
    //   if (this.props.match.params.id !== newProps.match.params.id) {
    //     this.fetchMovie(newProps.match.params.id);
    //   }
    // }

    saveMovie = () => {
        const addToSavedList = this.props.addToSavedList;
        addToSavedList(this.state.List);
    };

    render() {
        if (!this.state.List) {
            return <div>.</div>;
        }

        const { List } = this.state;
        return (
            <div className="save-wrapper">
                <MovieCard movie={movie} />
                <div className="save-button" onClick={() => this.saveMovie()}>
                    Save
        </div>
            </div>
        );
    }
}
