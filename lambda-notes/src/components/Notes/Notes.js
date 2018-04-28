import React from 'react';
import Note from './Note';
import { connect } from 'react-redux';
import { getNotes } from '../../actions';
import { Link } from 'react-router-dom';

const styled = {
    textDecoration: 'none',
    // color: 'rgb(97, 76, 76)'
    color: 'black'
}

class Notes extends React.Component {
    constructor() {
        super();
        this.state = {
            sorted: false,
            sortedArray: []
        }
    }
    componentDidMount() {
        this.props.getNotes();
    }

    // orderByName = () => {
    //     const compare = (a, b) => {
    //         if (a.name < b.name) return -1;
    //         if (a.name > b.name) return 1;
    //         return 0;
    //     }
    //     const byName = this.props.notes.sort(compare);
    //     this.setState({ sortedArray: [...byName], sorted: true });
    // }

    // orberbyOlder = () => {
    //     const compare = (a, b) => {
    //         if (a.id < b.id) return -1;
    //         if (a.id > b.id) return 1;
    //         return 0;
    //     }
    //     const byOldest = this.props.notes.sort(compare);
    //     console.log('sorting', byOldest)
    //     this.setState({ sortedArray: [...byOldest], sorted: false });
    // }

    render() {
        return (
            <div className="mainContent" >
                <div className="directory__title mainContent__title" >
                    Your Notes:
                </div>
                <div className="sortingOptions" >
                    {/* <button className="button button--sort" onClick={this.orderByName} >Sort By Name </button> */}
                    {/* <button className="button button--sort" onClick={this.orberbyOlder} >Sort By Oldest Added </button> */}
                </div>
                {this.state.sorted ?
                    <div className="mainContent__content" >
                        {/* {console.log('sorted should be false', this.state.sorted, 'state:', this.state, 'props', this.props)} */}
                        {/* {this.state.sortedArray.map((note, index) => {
                            return (
                                <div key={note.id + index * 2}>
                                    <Link to={`/notes/${note.id}`} style={styled} >
                                        <Note title={note.name} body={note.body} id={note.id} key={note.id} />
                                    </Link>
                                </div>)
                        })} */}
                    </div> :
                    <div className="mainContent__content" >
                        {/* {console.log('sorted should be false', this.state.sorted, 'state:', this.state, 'props', this.props)} */}
                        {this.props.notes.map((note, index) => {
                            return (
                                <div key={note.id + index}>
                                    <Link to={`/notes/${note.id}`} style={styled} >
                                        <Note title={note.name} body={note.body} id={note.id} key={note.id} />
                                    </Link>
                                </div>)
                        })}
                    </div>
                }
            </div>
        )
    }
};

const stateProps = (state, ownProps) => {
    return {
        notes: state.rootReducer.noteReducer.notes
    }
}

export default connect(stateProps, { getNotes })(Notes);