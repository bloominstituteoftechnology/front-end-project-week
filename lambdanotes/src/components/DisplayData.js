import React from 'react'
import "../styles/DisplayData.css"

import { Link } from 'react-router-dom'

class DisplayData extends React.Component {

    render(){
        console.log(this.props.dummyData)
        return (

            <div className="search-display-container">
                   
                        {this.props.dummyData.map(data => (
                           
                            <div className="display-notebox" key={data.id}>
                                <h2>
                                    <Link to={`/notes/${data.id}`}>Title: {data.title.toUpperCase()}</Link>
                                </h2>
                                <div className="contentbox">
                                    <p> <strong>Content2:</strong> {data.textBody.slice(0, 100) + (data.textBody.length > 100 ? "..." : "")}</p>
                                </div>
                                <div>
                                    Tag: <p>{data.tagTitle}</p>
                                </div>
                                
                            </div>   
                
                        ))}
        
            </div>

        )
    }
}

export default DisplayData


