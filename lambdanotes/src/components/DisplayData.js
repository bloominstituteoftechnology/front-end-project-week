import React from 'react'
import "../styles/DisplayData.css"

import { Link } from 'react-router-dom'

class DisplayData extends React.Component {

    render(){
        return (

            <div className="noteslist-container">
                    <div className="notebox-container">
                        {this.props.dummyData.map(data => (
                        <div>
                            <div className="notebox" key={data._id}>
                                <h2>
                                Title: <Link to={`/notes/${data._id}`}>{data.title.toUpperCase()}</Link>
                                </h2>
                                <div className="contentbox">
                                    <p> <strong>Content:</strong> {data.textBody.slice(0, 100) + (data.textBody.length > 100 ? "..." : "")}</p>
                                </div>
                                <p> <strong>ID:</strong> {data._id}</p>
                            </div>   
                        </div>
                        ))}
                    </div>
            </div>

        )
    }
}

export default DisplayData


