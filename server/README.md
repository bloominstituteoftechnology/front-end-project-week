# Redux Friends

Topics:

* `axios` package
* AJAX
* Promises
* Middleware
* `redux-thunk` package
* optional: `redux-logger` package

## Project Description

* Last week we built an app that interfaced with a `RESTful` API. That same project is now to be built using React & Redux.
* Take your examples from the mini project and use them to build a more sophisticated Application. Have fun!
* Once your server is up and running, the URL you'll be able to hit from within your action creators is `http://localhost:5000`.
* Take a look at the endpoints that our API has to offer in `server.js`.

  * **[GET]** to `/api/friends`: returns the list of friends.
  * **[GET]** to `/api/friends/123`: returns the friend with the id passed as part of the URL (123 in example).
  * **[POST]** to `/api/friends`: creates a friend and return the new list of friends. Pass the friend as the `body` of the request (the second argument passed to `axios.post`).
  * **[PUT]** to `/api/friends/:id`: updates the friend using the `id` passed as part of the URL. Send the an object with the updated information as the `body` of the request (the second argument passed to `axios.put`).
  * **[DELETE]** to `/api/friends/123`: removes the friend using the `id` passed as part of the URL (123 in example).

## Initialize Project

* Run `yarn` or `npm i` inside the root directory of this project to install dependencies.
* Run `yarn start` or `npm start` to start the API server.
* Run `create-react-app friends` in a separate terminal window in the root directory of the project to create your starter application.
* `cd` into the _friends_ folder and type `yarn add redux react-redux redux-thunk redux-logger axios` or `npm i redux react-redux redux-thunk redux-logger axios`, which will install the needed dependencies.
* You will create a list of your friends using React and Redux.
* A possible flow of steps will be to create your Components, action creators, reducers, root reducer and your Redux store. Then use the Provider component from `react-redux` to pass the store to your root component and `connect` the React components that need access to the store.
* Don't forget to hook up the store using the `Provider` tag inside of `src/index.js`, passing it your root reducer.
* You will need to use `redux-thunk` as a middleware inside of `src/index.js`. You'll want to be sure to pass it to `applyMiddleware()` then feed it into your createStore function.
* If you so choose, include `redux-logger` to your middleware. You're going to have plenty of action creators that will consume our API so you'll get plenty of actions triggered.

## Root Reducer and our State Tree

* Your initial state **could** (but doesn't have to) look something like this:

```js
{
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
}
```

* This is a pretty large state tree, but each field is extremely simple.
* All of your items in your state tree represent a make up of actions that you're going to make asynchronously. Think about your application and the state you need. This root reducer object will represent that state.
* Each `friend` item that is in the `friends` array should have the following format:

```js
{
  id: 1
  name: 'Joe',
  age: 24,
  email: 'joe@lambdaschool.com',
}
```

## Project

* For this project you'll need to create a few React components that will interact with your Redux state.
* This app can all be built in terms of a single view made up of multiple components. Some components will be connected to your Redux Store and others will get their data passed down as props from the connected components.

No need for a router here. We can fit all we need into one page with some proper styling and layout decisions.

* Your component tree **could** (but doesn't have to) look a like this.

```
index.js
  - App.js
    - Friends.js
    - CreateFriendForm.js
    - UpdateFriendForm.js
```

* If you'd like, you can create multiple components and `connect` them all up to your `redux` state tree. You could have a component who's sole purpose is to render a form for updating a user; another component who's sole purpose is for creating users; and then another component who's sole purpose is to delete a user.
* It really is up to you how you build this project. I suggest writing down the flow you want to follow, and then writing down each individual piece you need for each step in the flow (ie step 3, build containers - import connect, write mapStateToProps function, import action creators and pass them to connect, etc. etc.) so that this process doesn't feel as overwhelming.

#### App.js

* Inside of `App.js` I suggest doing the friend fetching for your _friends_ data from within `componentDidMount()`. You'll need to call an action creator that you build in order to fetch your friends.
* A crude example of what this could potentially look like would be:
  ![Bad example](https://image.ibb.co/hpg7gw/Screen_Shot_2018_01_24_at_1_07_21_PM.png)
* You **Definitely** want to style your application to look much better than mine!

## Stretch Problem

* In the requirements for this project, we implemented a GET operation and a POST operation. Add two more actions, one for making a PUT request, and the other for making a DELETE request.
* Style the friends list and the input field and make everything look nice.
* Expand the number of properties that you put on each friend object. Feel free to remove the dummy data on the server or modify it in any way.
