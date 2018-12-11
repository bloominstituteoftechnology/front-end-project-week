import { connect } from 'react-redux';
import ToolBar from './ToolBar';
import { menuToggle } from '../../actions' 

const mapStateToProps = state => {
    const { notes, showMenu } = state.notes;
    return {
        notes,
        showMenu
    }
}

const mapDispatchToProps = {
    menuToggle 
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);

