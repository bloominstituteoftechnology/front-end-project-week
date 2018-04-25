import React from 'react';

const MODAL_COMPONENTS = {
    'DELETE_POST': DeletePostModal,
    'CONFIRM_LOGOUT': ConfirmLogoutModal,
    /* other modals */
  }
  
  const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType) {
      return <span /> // after React v15 you can return null here
    }
  
    const SpecificModal = MODAL_COMPONENTS[modalType]
    return <SpecificModal {...modalProps} />
  }
  
  export default connect(
    state => state.modal
  )(ModalRoot)