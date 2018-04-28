// import { combineReducers } from 'redux'
// import {
//   ADD_TODO,
//   TOGGLE_TODO,
//   SET_VISIBILITY_FILTER,
//   VisibilityFilters
// } from '../actions/actions'

// const { SHOW_ALL } = VisibilityFilters


import React from 'react';

export function rootReducer() {
    return [
                {
                    id: 0,
                    title: 'What I love to do!',
                    content: 'I love to walk around, play on my computer, and say hi to my neighbors'
                },
                {
                    id: 1,
                    title: 'Board Games',
                    content: 'Monopoly, Life, Risk'
                },
                {
                    id: 2,
                    title: 'Gross Foods',
                    content: 'Waterchestnuts, sludge, vegemite'
                }

    ];
}
//     function visibilityFilter(state = SHOW_ALL, action) {
//       switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//           return action.filter
//         default:
//           return state
//       }
//     }
//     ​
//     function todos(state = initial__state__object, action) {
//       switch (action.type) {
//         case ADD_TODO:
//           return [
//             ...state,
//             {
//               text: action.text,
//               completed: false
//             }
//           ]
//         case TOGGLE_TODO:
//           return state.map((todo, index) => {
//             if (index === action.index) {
//               return Object.assign({}, todo, {
//                 completed: !todo.completed
//               })
//             }
//             return todo
//           })
//         default:
//           return state
//       }
//     }
//     ​
//     const todoApp = combineReducers({
//       visibilityFilter,
//       todos
//     })
//     ​
//     export default todoApp