import { connect } from 'react-redux';
import SidebarComponent from './SidebarComponent';
import { sidebarOperations } from './duck';
const mapStateToProps = (state) => {
    const isDark = state.sidebar.darkTheme;
    const { note } = state.noteView;
    return {
        isDark,
        note
    }
}
const mapDispatchToProps = dispatch => {
    const toggleTheme = (isDark) => dispatch(sidebarOperations.toggleTheme(isDark));
    return {
        toggleTheme
    }
}
const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);

export default SidebarContainer;