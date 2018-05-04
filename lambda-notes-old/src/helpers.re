let toString = ReasonReact.string;

let valueFromEvent = e : string => (
                                     e
                                     |> ReactEventRe.Form.target
                                     |> ReactDOMRe.domElementToObj
                                   )##value;