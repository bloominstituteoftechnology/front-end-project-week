[%bs.raw {|require('./index.css')|}];

[@bs.module "./registerServiceWorker"]
external register_service_worker : unit => unit = "default";

module Config = {
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
};

module Router = {
  type state = {currentRoute: Config.routes};
  type action =
    | ChangeUrl(Config.routes);
  let component = ReasonReact.reducerComponent("Router");
  let make:
    ((~currentRoute: Config.routes) => ReasonReact.reactElement) =>
    ReasonReact.component(state, _, action) =
    children => {
      ...component,
      initialState: () => {
        currentRoute:
          ReasonReact.Router.dangerouslyGetInitialUrl() |> Config.urlToRoute,
      },
      reducer: (action, _state) =>
        switch (action) {
        | ChangeUrl(route) => ReasonReact.Update({currentRoute: route})
        },
      subscriptions: self => [
        Sub(
          () =>
            ReasonReact.Router.watchUrl(url =>
              self.send(ChangeUrl(url |> Config.urlToRoute))
            ),
          ReasonReact.Router.unwatchUrl,
        ),
      ],
      render: ({state}) => children(~currentRoute=state.currentRoute),
    };
};

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