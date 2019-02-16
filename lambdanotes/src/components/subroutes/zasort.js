import React from 'react'
import { Link } from 'react-router-dom' 

import { connect } from 'react-redux'
import { getNotes } from '../../actions/noteAction'

class ZaSort extends React.Component {
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.getNotes()      //gets notes from actions, which comes from store
    }

    sortObjProperty2 = (list, key) => {
        const compare = (a, b) => {
            a = a[key];
            b = b[key];
            const type = (typeof(a) === 'string' || 
                        typeof(b) === 'string') ? 'string' : 'number';
            let result;
            if (type === 'string') result = b.localeCompare(a);   //reverses the order Z-A
            else result = b - a;                                  //reverses the order Z-A
            return result;
        }
        return list.sort(compare);
    }

    render(){
        const emptyArr5 = [];
        {this.props.notes.map(note => {
            emptyArr5.push(note)
        })}

        return(
            <div id="myDIV">
                <div className="filter-title" ><h2> Z-A: </h2></div>
                <div className="notebox-container">
                    {this.sortObjProperty2(emptyArr5, 'title').map(obj => {
                        return(
                                <div className="notebox" key={obj.id}>
                                    <div className="hoverinfo"><button>i</button> 
                                        <p>{obj.textBody}</p>
                                    </div>
                                    <h2>
                                        <Link to={`/notes/${obj.id}`}>{obj.title.toUpperCase()}</Link>
                                    </h2>
                                    <div className="contentbox">
                                        <p> <strong>Content:</strong> {obj.textBody.slice(0, 100) + (obj.textBody.length > 100 ? "..." : "")}</p>
                                    </div>
                                    <div>
                                        <p>{obj.tagTitle}</p>
                                    </div>
                                </div>
                            ) 
                    })}
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


export default connect(mapStateToProps, {getNotes})(ZaSort)