import React from 'react'

 const NtsIdv = (props) => {
     console.log(props);
    console.log(props.nts_idv);
     const hdldltfn = () => {
         props.hdldltnt(props.nts_idv._id);
         props.history.push("/nts")
     };

     if (props.nts_fthg || props.nts_arr.length === 0) {
         return <h2>Loading...</h2>
     }
  return (
    <div>
      <h1>{props.nts_idv.title}</h1>
      <p>{props.nts_idv.textBody}</p>
      <button onClick={(event) => {
          event.preventDefault();
          props.redrtfrm(event, props.nts_idv._id);
      }}>Edit</button>
      <button onClick={hdldltfn}>Remove</button>
    </div>
  )
}

export default NtsIdv;