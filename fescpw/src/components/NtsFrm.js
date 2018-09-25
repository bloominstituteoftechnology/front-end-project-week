import React from 'react'

const NtsFrm = (props) => {
    const hdlsbmt = event => {
        event.preventDefault();
        if (props.ntsedtg) {
            props.hdledt();
        } else {
            props.hdlcrt(event);
        }
    }
  return (
    <div>
      <h2>{props.ntsedtg ? "Edit" : "Create"}</h2>
      <form>
          <input
            type="text"
            value={props.ntsidv.title}
            name="title"
            onChange={props.hdlchg}
            placeholder="Title"
          />
          <input
            type="text"
            value={props.ntsidv.textBody}
            name="textBody"
            onChange={props.hdlchg}
            placeholder="Content"
          />
          <input
            type="text"
            value={props.ntsidv.tags.join(", ")}
            name="tags"
            onChange={props.hdlchg}
            placeholder="Tags"
          />
          <button onClick={hdlsbmt}>Submit</button>
      </form>
    </div>
  )
}

export default NtsFrm;