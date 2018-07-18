import React, { Component } from 'react';

class LambdaEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            notes: []
        }
    }


    
    render() {
        <div>
        <h2>Edit Note:</h2>
        <form>
                <input style={{ width: '500px', height: '30px', marginBottom: '15px' }} type="text" name="title" placeholder="Note Title" /><br />
                <textarea style={{ width: '600px', height: '350px' }} type="text" name="body" placeholder="Note Content"   /><br />
                <button>Update</button>
            </form>
        </div>
    }
}
export default LambdaEdit;