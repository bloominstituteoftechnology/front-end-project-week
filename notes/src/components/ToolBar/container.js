import { connect } from 'react-redux';
import ToolBar from './ToolBar';
import { menuToggle, selectModeToggle } from '../../actions' 

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
    selectModeToggle
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);

