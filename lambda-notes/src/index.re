[%bs.raw {|require('./index.css')|}];

[@bs.module "./registerServiceWorker"]
external register_service_worker : unit => unit = "default";

module Router = {
  let component = ReasonReact.statelessComponent("Router");
  let make = _children => {
    ...component,
    render: self => {
      ReasonReact.Router.watchUrl(url =>
        switch (url.path) {
        | ["notes", id, "edit"] => Js.log("editing note with id: " ++ id)
        | ["notes", id] => Js.log("viewing note with id: " ++ id)
        | ["create"] => Js.log("create")
        | [] => Js.log("home")
        | _ => ReasonReact.Router.push("/")
        }
      );
      <App.Top message="Lambda Notes" />;
    },
  };
};

ReactDOMRe.renderToElementWithId(<Router />, "root");

register_service_worker();