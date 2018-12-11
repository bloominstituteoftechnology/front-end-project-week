import { connect } from 'react-redux';
import Header from './Header';

import { 
    searchHandler, 
    getNotes, 
    setSortMode, 
    menuToggle,
    logout
} from '../../actions';


const mapStateToProps = state => {
    const { sortMode } = state.notes;
    return {
        sortMode
    }
}

const mapDispatchToProps = {
    searchHandler, 
    getNotes, 
    setSortMode, 
    menuToggle,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

