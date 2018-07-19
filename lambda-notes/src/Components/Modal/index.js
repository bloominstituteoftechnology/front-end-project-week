import ConfirmLogoutModal from './ConfirmLogoutModal'

const MODAL_COMPONENTS = {
  'DELETE_POST': DeletePostModal,
  'CONFIRM_LOGOUT': ConfirmLogoutModal,
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return <span />
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} />
}

export default connect(
  state => state.modal
)(ModalRoot) 