import React from "react";

const EditView = (props) => { 

   const submit = e => {
     e.preventDefault();
     props.handleEditSubmit(props.match.params.id);
     props.history.push("/");
     console.log("props", props);
   };
      return <div>
          {console.log("looking for note", props)}
          <form onSubmit={submit}>
            <div>
              <input type="text"  placeholder="Title" onChange={props.inputChange("title")} value={props.title} />
            </div>
            <div>
              <textarea  placeholder="Content" onChange={props.inputChange("content")} value={props.content} />
            </div>
              <button type="submit">Update</button>
           </form>
        </div>;
}

export default EditView;
    
