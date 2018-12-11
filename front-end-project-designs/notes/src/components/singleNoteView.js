import React from "react";
import axios from "axios";
import NoteView from "./noteView";
import { Link } from "react-router-dom";
import { fetchSingle } from "../actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBar from "./navBar";
import styled from "styled-components";
const ContainerDiv = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  background-color: #d3d2d3;
  box-sizing: border-box;
`;
const InnerDiv = styled.div`
  display: flex;
  width: 75%;
  flex-wrap: wrap;
  background-color: #F2F1F2
`;
const StyleNote = styled(NoteView)`
  width: 300%;
  border: red solid 1px;
`;
const NoteDiv = styled.div`
padding: 5px;
width: 100%
margin-bottom: 10px;
font-size: 12px;
display: flex;
flex-wrap: wrap;
text-align: left;
justify-content: flex-end

`;
const StyledLink = styled(Link)`
  font-size: 16px;
  font-weigth: bolder;
  text-decoration: none;
  color: black;
  width: 100%
`;
const TextDiv = styled.div`
  font-size: 12px;
  width: 100%;
  padding-top: 10px;
`;
const TopStyledLink= styled(Link) `
  font-size:8pt;
  font-weigth: bold;
  text-decoration: underline;
  color: black;
  margin-right: 10px;
`
// class SingleView extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             singleNote:[],
//             id: this.props.match.params.id
//         }
//     }
//     componentDidMount(){
//         this.handleSingle(this.state.id)
//     }
//     handleSingle =(id)=>{
//       this.props.fetchSingle(id)
//       this.setState({singleNote: this.props.singleNote})
//     }
//     render(){
//       console.log(this.props.match.params.id);
//       console.log(this.state.id)
//         // if(this.state.singleNote.length===0){
//         //     return (
//         //         <div>Hold one, we're getting your note</div>
//         //     )
//         // }
//         return (
//             <div><NoteView note={this.state.singleNote}/>
//             <button>Edit</button>
//             <button onClick={this.props.handleDelete(this.state.singleNote._id)}>Delete</button></div>

//         )
//     }
// }
// const mapStateToProps=state =>{
//   return{
//     singleNote:state.singleNote
//   }
// }

// export default withRouter(
//   connect(
//     mapStateToProps,{fetchSingle})(SingleView)
//   )
class SingleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleNote: [],
      isEditing: false
    };
  }
  componentDidMount() {
    this.fetchSingle(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }
  fetchSingle = id => {
    axios
      .get(`https://quan-back-end.herokuapp.com/api/notes/${id}`)
      .then(response => {
        console.log("Single works", response.data);
        this.setState(() => ({ singleNote: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    console.log("Single View Here");
    return (
      <ContainerDiv>
        <NavBar />
        <InnerDiv>
          <NoteDiv>
            <TopStyledLink to={`/form/edit/${this.props.match.params.id}`}>Edit</TopStyledLink>
            <TopStyledLink
              to="/"
              onClick={() => {
                this.props.handleDelete(this.state.singleNote._id);
                this.props.getNote();
                window.location.reload();
              }}
            >
              Delete
            </TopStyledLink>
            <StyledLink to={`/notes/${this.state.singleNote._id}`}>
              Title: {this.state.singleNote.title}
            </StyledLink>

            <TextDiv>{this.state.singleNote.textBody}</TextDiv>
          </NoteDiv>
        </InnerDiv>
      </ContainerDiv>
    );
  }
}
export default SingleView;
