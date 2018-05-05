type routes =
  | NotesList
  | NoteCreate
  | NoteEdit(string)
  | NoteDelete(string)
  | NoteDetail(string)
  | NotFound;

let urlToRoute: ReasonReact.Router.url => routes =
  url =>
    switch (url.path) {
    | [] => NotesList
    | ["notes", "create"] => NoteCreate
    | ["notes", id, "edit"] => NoteEdit(id)
    | ["notes", id, "delete"] => NoteDelete(id)
    | ["notes", id] => NoteDetail(id)
    | _ => NotFound
    };