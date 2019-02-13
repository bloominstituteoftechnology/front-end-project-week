import React from 'react'
import "../styles/DisplayData.css"

import { Link } from 'react-router-dom'

class DisplayData extends React.Component {

    render(){
        return (

            <div className="search-display-container">

                        {this.props.dummyData.map(data => (
            
                            <div className="display-notebox" key={data.id}>
                                <h2>
                                    <Link to={`/notes/${data.id}`}>{data.title.toUpperCase()}</Link>
                                </h2>
                                <div className="contentbox">
                                    <p> <strong>Content:</strong> {data.textBody.slice(0, 100) + (data.textBody.length > 100 ? "..." : "")}</p>
                                </div>
                            </div>   
                
                        ))}
        
            </div>

        )
    }
}

export default DisplayData


