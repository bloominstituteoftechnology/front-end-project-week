const NotesList = (props) => {
        return (
          <React.Fragment>
            <div className="Notes">
                {this.props.notes.map(note => {
                  return (
                    <div key={note.id}>
                      <div>{note.title}</div>
                      <div>{note.text}</div>
                    </div>)
                } )}
            </div>
          </React.Fragment>
        ); 
  };

  export default NotesList;