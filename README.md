<p align="center">
  <a href="https://lambdanotes.app">
    <img alt="Lambda Notes" src="./assets/logo.png" width="120" />
  </a>
</p>

**_A light-weight note taking application_**

## Tech Stack

Lambda Notes utilizes [Heroku](https://www.heroku.com/) and [Netlify](https://www.netlify.com/) for deployment, and is built in full stack JavaScript with a [React.js](https://reactjs.org/)/[Redux](https://redux.js.org/) frontend, a [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/) backend, [PostgreSQL](https://www.postgresql.org/) is used to store notes in production, and a [SQLite3](https://www.sqlite.org/index.html) database in development.

#### Frontend

[![Netlify Status](https://api.netlify.com/api/v1/badges/773ad9f7-c5d1-4ac5-8c28-01e19711fa12/deploy-status)](https://app.netlify.com/sites/lambdanotesdev/deploys)

[https://lambdanotes.app/](https://lambdanotes.app/)

- React

  - Blazing fast rendering with the virtual DOM
  - Robust developer tools for debugging
  - Component based structure maximizes reusablity and makes codebase more maintainable
  - Unidirectional data flow increases app performance and makes debugging easier
  - API friendly library works seamlessly with and is extendable across numerous frameworks to leverage advanced UI development

- Redux

  - State is always predictable and immutable.
  - Redux is strict about organization, therefore easier to maintain.
  - The of pure reducer functions makes logic easier to test.
  - Centralized state makes it possible to implement things like logging changes in data or persisting data through page refreshes.

- Firebase Authentication

  - Makes building secure authentication systems easy, while improving the sign-in and onboarding experience for end users.
  - End-to-end identity solution that supports email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.
  - Provides a customizable, open source, drop-in auth solution that handles the UI flows for signing in users.
  - Applies Google's internal expertise of managing one of the largest account databases in the world.

- Styled Components
  - Scopes styles to a component to avoid style leaks
  - Linters will show unused components so they can be removed
  - Source order independence eliminates the need to import files in a certain order
  - Compose new styles from existing components
  - Passing properties to the component allows for more flexibility

#### Backend

[![Heroku](https://heroku-badge.herokuapp.com/?app=onedrousdev&style=flat)](https://onedrousdev.herokuapp.com)

[https://onedrousdev.herokuapp.com/](https://onedrousdev.herokuapp.com/)

- Node.js

  - Utilizes Google's V8 JS engine which is lightening fast, highly performant, and more scalable
  - Event loop allows non-blocking I/O operations which enhances speed of code execution
  - Integrates seamlessly with microservices architecture
  - Fullstack JS allows JS developers to work on both client and server sides potentially increasing productivity and saving money for startups

- Express

  - Includes numerous routing features and separate handlers for HTTP methods
  - Serves static files such as images and CSS / JS files
  - Integrates seamlessly with many popular template engine and NPM module plugins

## API

### API Endpoints

| Method | Endpoint     | Request | Response                  |
| ------ | ------------ | ------- | ------------------------- |
| GET    | /notes       |         | Array of notes            |
| GET    | /notes/:id   |         | Single note               |
| POST   | /create      |         | Create note object        |
| PUT    | /edit/:id    |         | Edit existing note object |
| DELETE | /delete/:id/ |         | Delete an existing note   |

## Security

### Authentication & Authorization

#### Firebase

Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect
