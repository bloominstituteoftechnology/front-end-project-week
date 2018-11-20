export const filterText = (text = "") => ({
    type: "FILTER_TEXT",
    text
});

export const sortBy = sortType => ({
    type: "SORT_BY",
    sortType
});

const filtersReducerDefaultState = {
    text: "",
    sortBy: "",
};

export const clear = () => ({
    type: "CLEAR",
    defaultFilter: filtersReducerDefaultState
});