export default class Modal extends Component {
  render() {
    return(
      <div className="modal" class="modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.NoteTitle}</p>
            <button className="delete" aria-label="close" onClick={this.closeModal}></button>
          </header>
          <section className="modal-card-body">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                <a href="#" class="card-header-icon" aria-label="more options" onClick={this.showModal}>
                {this.props.NoteTitle}
                </a>
              </p>
            </header>

          <div className="card-content">
            <div className="content">
              {this.props.NoteContent}
              <br />
              <hr />
              <br />
              <time dateTime={this.props.NoteTimeStap}>{this.props.NoteTimeStamp}</time>
            </div>
          </div>
          </div>
          </section>
          <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button" onClick={this.closeModal}>Cancel</button>
          </footer>
          </div>
        </div>
    )
  }
}
