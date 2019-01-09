import React from "react"
import axios from "axios"
import {Link} from "react-router-dom";
import DeleteModal from "./DeleteModal";
import {LinkContainer, Content} from "../Styles/Styles";

class NoteView extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         id: '',
         title: '',
         textBody: '',
         isModalOpen: false
      }
       this.toggle = this.toggle.bind(this)
     }

   componentDidMount(){
      this.retrieveNote(this.props.match.params.id)
   }

   componentWillReceiveProps(noteProps) {
      if(this.props.match.params.id !== noteProps.match.params.id){
         this.retrieveNote(noteProps.match.params.id)
      }
   }

   toggle() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
   }

   retrieveNote = id => {
      axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
         .then(response => {this.setState({
            title: response.data.title, 
            textBody: response.data.textBody,
            id: response.data._id
         })})
         .catch(err => console.log(err))
   }

   render(){
      console.log(this.props, "this is the props of noteview")
      return(
         <div>
            <LinkContainer>
               <Link to={`/edit/${this.state.id}`}>
                  <span>edit</span>
               </Link>
                  <span onClick= {this.toggle}>delete</span>
            </LinkContainer>
            <Content>
               <h2>{this.state.title}</h2>
               <hr/>
               <p>{this.state.textBody}</p>
            </Content>
            <DeleteModal isModalOpen = {this.state.isModalOpen} toggle = {this.toggle} id = {this.state.id} history = {this.props.history}/>
         </div>
      )
   }
}

export default NoteView