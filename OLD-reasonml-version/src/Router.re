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