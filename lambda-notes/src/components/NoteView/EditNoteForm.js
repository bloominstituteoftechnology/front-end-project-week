// import React from 'react';
    
// class EditNoteForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             titleText: '',
//             bodyText: '',
//         }
//     }
//      changeHandler = event => {
       
//         this.setState({ [event.target.name]: event.target.value});
//     }
//      render() {
//         return (
//             <div className='editNoteForm'>

//             <h2> Edit Note: </h2>
//                 <form onSubmit = {this.props.editNote}>

//                     <input 
//                         type='text' 
//                         onChange={this.changeHandler}
//                         name='titleText' 
//                         placeholder = 'Title'
//                         value={this.state.titleText} />
//                     <input 
//                         type='text' 
//                         onChange={this.changeHandler} 
//                         name='bodyText'
//                         value={this.state.bodyText}
//                         placeholder = 'Note' />
//                     <button 
//                         onClick={() => this.props.editNote ({title:this.state.titleText, textBody: this.state.bodyText})}> Update 
//                     </button>

//                 </form>        
//             </div>
//         )
//     }
// }
//  export default EditNoteForm;