import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { homeOperations } from './duck';

const mapStateToProps = state => {
    const { notesData, fetchingNotes } = state.home;
    return {
        notesData,
        fetchingNotes
    }
}

const mapDispatchToProps = dispatch => {
    const fetchNotes = () => {
        dispatch(homeOperations.fetchNotes());
    }
    return {
        fetchNotes
    }
}
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);


export default HomeContainer;