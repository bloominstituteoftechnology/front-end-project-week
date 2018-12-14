import React from "react";

const DeleteNote = props => {
  <div class="popup" onclick={props.deleteNote()}>
    Click me!
    <span class="popuptext" id="myPopup">
      Popup text...
    </span>
  </div>;
};

export default DeleteNote;
