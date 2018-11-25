import React from 'react'

import { connect } from 'react-redux'
import { getNotes } from '../actions/noteAction'

class ReactSort extends React.Component {
    constructor(){
        super();
        this.state = {
            notes: [],
            sortAZ: false,
            sortUN: false,
        }
    }

    componentDidMount(){
        this.props.getNotes()
    }

    sortObjProperty = (list, key) => {
        const compare = (a, b) => {
            a = a[key];
            b = b[key];
            const type = (typeof(a) === 'string' || 
                        typeof(b) === 'string') ? 'string' : 'number';
            let result;
            if (type === 'string') result = a.localeCompare(b);    //sort A-Z
            else result = a - b;                                   //sort A-Z
            return result;
        }
        return list.sort(compare);
    }


    sortClick = () => {
        this.setState(prevState => ({
            sortAZ: !prevState.sortAZ
        }));
    }

    sortClick2 = () => {
        this.setState(prevState => ({
            sortUN: !prevState.sortUN
        }))
    }


    render(){
        const emptyArr = [];

        //A-Z
        {this.props.notes.map(note => {
            emptyArr.push(note)
        })}

        return (
            <div>

                <div>
                    ReactSort Testing: A-Z
                    <div onClick={this.sortClick}>
                        <h1>{this.state.sortAZ ? 'unsort' : 'a-z'}</h1>
                        {this.state.sortAZ && (
                            <div>
                                {this.sortObjProperty(emptyArr, 'title').map(obj => {
                                    return (
                                        <div className="notebox" key={obj._id}>
                                            Title: <h2>{obj.title.toUpperCase()}</h2>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    ReactSort Testing: UNSORT
                    <div onClick={this.sortClick2}>
                        <h1>{this.state.sortUN ? 'default' : 'sortUN'}</h1>
                        {this.state.sortUN && (
                            <div>
                                {this.props.notes.map(note => {
                                    return (
                                        <div className="notebox" key={note._id}>
                                            Title: <h2>{note.title.toUpperCase()}</h2>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div> 



            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        error: state.error,
        loading: state.loading,
    }
}

export default connect(mapStateToProps, { getNotes})(ReactSort)
//export default ReactSort


// {this.props.notes.map(note => {
//     return (
//         <div className="notebox" key={note._id}>
//             <h2>{note.title}</h2>
//         </div>
//     )
// })}


