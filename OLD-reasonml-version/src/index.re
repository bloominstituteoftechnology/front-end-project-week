[%bs.raw {|require('./index.css')|}];

[@bs.module "./registerServiceWorker"]
external register_service_worker : unit => unit = "default";

ReactDOMRe.renderToElementWithId(
  <Router>
    ...(
         (~currentRoute) =>
           switch (currentRoute) {
           | NotesList => <App.Top message="Lambda Notes List" />
           | NoteCreate => <App.Top message="Lambda Notes Create" />
           | NoteEdit(id) => <App.Top message=("Lambda Notes Edit" ++ id) />
           | NoteDelete(id) =>
             <App.Top message=("Lambda Notes Delete" ++ id) />
           | NoteDetail(id) =>
             <App.Top message=("Lambda Notes Detail" ++ id) />
           | NotFound => "Not Found" |> ReasonReact.string
           }
       )
  </Router>,
  "root",
);

register_service_worker();