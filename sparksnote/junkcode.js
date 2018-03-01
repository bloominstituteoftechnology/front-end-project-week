<ul className="home__list">
          {this.props.notes.map((noteObj, i) => {
            return (
              <Link to="/notes/:id" state={this.props.notes[i]} ><div className="home__list__cards">
                <li className="home__list__cards__title">{noteObj.title}</li>
                <li className="home__list__cards__note">{noteObj.note}</li>
              </div></Link>
              )
          })}
        </ul>