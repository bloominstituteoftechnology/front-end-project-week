import React from 'react';

class Create extends React.Component {
// const Create = (props) => {
    constructor(props) {
        super(props) ;
    }
    render(){
    console.log('Over HERE!!!', this.props);
    return (
        <div>
            new
        </div>
    )
}
};
export default Create;