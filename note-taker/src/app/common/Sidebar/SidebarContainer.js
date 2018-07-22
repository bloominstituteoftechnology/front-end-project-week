import { connect } from 'react-redux';
import SidebarComponent from './SidebarComponent';
import { sidebarOperations } from './duck';
const mapStateToProps = (state) => {
    const isDark = state.sidebar.darkTheme;
    const { notesData } = state.home;
    return {
        isDark,
        notesData
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