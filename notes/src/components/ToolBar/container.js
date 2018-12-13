import { connect } from 'react-redux';
import ToolBar from './ToolBar';
import { menuToggle, selectModeToggle, logout } from '../../actions' 

const mapStateToProps = state => {
    const { notes, showMenu, selectMode } = state.notes;
    return {
        notes,
        showMenu,
        selectMode
    }
}

const mapDispatchToProps = {
    menuToggle,
    selectModeToggle,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);

