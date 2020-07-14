import React from 'react';
import { connect } from 'react-redux';

import NotesList from './NotesList';
import CreateNote from './CreateNote';
import ViewNote from './ViewNote';
import EditNote from './EditNote';
import Search from './Search';
import SearchResults from './SearchResults';
import SortOverview from './SortOverview';
import DownloadNotes from './DownloadNotes';

import './css/MainContent.css';

class MainContent extends React.Component {
  render() {
    let show = null;
    if (this.props.current === 'list') return (show = <NotesList />);
    if (this.props.current === 'create-note') return (show = <CreateNote />);
    if (this.props.current === 'note') return (show = <ViewNote />);
    if (this.props.current === 'edit') return (show = <EditNote />);
    if (this.props.current === 'search') return (show = <Search />);
    if (this.props.current === 'results') return (show = <SearchResults />);
    if (this.props.current === 'sort') return (show = <SortOverview />);
    if (this.props.current === 'download') return (show = <DownloadNotes />);
    return <div>{show}</div>;
  }
}

const mapStateToProps = state => {
  return {
    current: state.current,
  };
};

export default connect(mapStateToProps, null)(MainContent);
