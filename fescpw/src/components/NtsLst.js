import React from 'react'

 const NtsLst = (props) => {
     if (!props.nts_arr || !props.nts_arr.length) {
         return <h1>Loading...</h1>
     }
  return (
    <div>
      {props.nts_arr.map(ntsidv => (
          <div key={ntsidv._id}>
            <h2 onClick={(event) => {
                event.preventDefault();
                props.ntssgr(ntsidv._id);
                props.history.push(`/nts/${ntsidv._id}`);
                }}>{ntsidv.title}</h2>
            <p>{ntsidv.textBody}</p>
            <small>{ntsidv.tags}</small>
          </div>
      ))}
    </div>
  )
}

export default NtsLst;