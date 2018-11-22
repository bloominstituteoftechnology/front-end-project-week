import React from 'react'

class DisplayData extends React.Component {

    render(){
        return (
            <div>
                {this.props.dummyData.map(data => (
                    <div key={data._id}>
                        <p>{data.title}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default DisplayData