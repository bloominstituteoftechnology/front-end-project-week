// import React from "react";

// class Note extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {}
//     };
//   }

//   componentDidMount() {}

//   render() {
//     return (
//       <div>
//         <h1>ok</h1>
//         <h3>{this.title}</h3>
//       </div>
//     );
//   }
// }

// export default Note;
import React from "react";

const Note = props => {
  console.log(props);
  console.log(props.wtf);
  return <h1>{props.wtf}</h1>;
};

export default Note;
