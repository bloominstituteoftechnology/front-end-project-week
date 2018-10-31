// import React from "react";

// class Note extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     let id = props.match.params.id;
//     console.log(id);
//   }

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
  console.log(props.wtf);

  let id = props.match.params.id;

  console.log(id);
  return (
    <div>
      <h1>{props.wtf}</h1>
    </div>
  );
};

export default Note;
