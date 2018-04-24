export const VIEW_NOTE = "VIEW_NOTE";

export const viewNote = id => {
    return {
      type: "VIEW_NOTE",
      payload: id,
    };
  };