// ATTEMPT AT EXPORTING CSV FILE - FAILURE

// TO TRY:
// refactor how note imformation from api is passed between components

//import React from 'react';
// import axios from 'axios';
// import { CSVLink } from 'react-csv';

// const headers = [
//     { label: "ID", key: "_id" },
//     { label: "Tags", key: "tags" },
//     { label: "Title", key: "title" },
//     { label: "Content", key: "textBody" }
// ];

// // fixing a bug inside of React CSV
// class PropDataUpdatedCSVLink extends CSVLink {
//     constructor(props) {
//         super(props);

//         this.state = {
//             csvData: []
//         }
//     }

//     componentDidMount() {
//         axios
//             .get('https://fe-notes.herokuapp.com/note/get/all')
//             .then(response => {
//                 this.setState({
//                     csvData: response.data
//                 })
//             })
//             .catch(err => console.log(err));
//     }

//     componentWillReceiveProps(nextProps) {
//         const { data, headers, separator, uFEFF } = nextProps;
//         this.setState({ href: this.buildURI(data, uFEFF, headers, separator) });
//     }

//     csvLink = React.createRef();

//     downloadHandler = () => {
//         axios
//             .get('https://fe-notes.herokuapp.com/note/get/all')
//             .then(response => {
//                 this.setState({
//                     csvData: response.data
//                 }, () => this.csvLink.current.link.click())
//             })
//             .catch(err => console.log(err));
//     }

//     render() {
//         return (
//             <div>
//                 <button className="navigation-button" onClick={this.downloadHandler}>Download Notes</button>
//                 <PropDataUpdatedCSVLink
//                     data={this.state.csvData}
//                     headers={headers}
//                     className="hidden"
//                     filename="lambda-notes.csv"
//                     ref={this.csvLink}
//                     target="_blank"
//                 />
//             </div>
//         )
//     }
// }

// export default PropDataUpdatedCSVLink;
