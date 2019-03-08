data source: use provided server or heroku backend from CSPT1?

## Trello Set Up:
## https://trello.com/b/yb81oD4w/lambda-notes-glenn-david-daniel-lambdaschool-fepw
- [x] Create a Trello account
- [x] Create a new board called "Lambda Notes - {Your Name}"
- [x] Create lists titled `backlog`,`To Do`, `In Progress`, and `Done`
- [x] Fill in the `To Do` list with the MVP features listed below
- [x] Fill in the `backlog` list with all the extra features listed below
- [x] Share your board with the project manager that has been assigned to you. If you have not been assigned yet, reach out to your lead PM for guidance
- [x] Add your Trello URL to your project's README.md file. Commit the change, push it to your repository & submit a pull request

## Project Setup
// PR - https://github.com/LambdaSchool/Sprint-Challenge-Redux-notes/pull/560


## Initializing Project - READ THIS CAREFULLY, you have two apps here. A server, and a client.

* [x] Start by forking and cloning this repository.
* [x]   `cd` into the forked copy of this repo.
* [x]   **RUN** `yarn` or `npm install` to retrieve all `server-side` the dependencies.
* [x] **LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.
* [x] **RUN** `yarn start` or `npm start` to get your API up and running on `http://localhost:5000`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
* [x] After your API is up and running, you can open chrome and type in `http://localhost:5000/notes`. You should see the seed array you created.  This is an array that your **API** will be using to store our Note Data.
* [] **LOOK** at your `notes` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.


* [] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
* [] **cd** into `notes` and run `yarn` or `npm install` to retrieve the client side dependencies.
* [] **RUN** `yarn start` or `npm start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.


## API Design

### GET '/notes'

* [x] To retrieve an array all the notes in the Note DB simply write a get to the endpoint `'/notes'`.
* [x] Because `Redux-Thunk` is wired up as a middleware for this project. Be sure to utilize thunks when appropriate.

* [] Your response from the server should be an array of notes.

### POST '/notes'

* [] To add a note to the Note DB you'll need all three fields. `title`, `priority`, and `body`.

* [] If a note is created correctly, you should see a response that is an array of notes with uniqe id's assigned to each note.
* []  Initially Brainey will be in the array, but it takes more than one note to make the village. Be sure to add a few notes to populate our note village.
* **HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.
    

## MVP Features:

- [ ] Display a list of notes
- [ ] Create a note with a title and content
- [ ] View an existing note
- [ ] Edit an existing note
- [ ] Delete an existing note
- [ ] Wire up your static React App to our Notes API.
  - Now that you've completed the MVP for this project, we want to work with some data that will be persistent across a server. [We have built a Notes API](/NOTES.md) for you. You'll find information about this server in the NOTES.md file.

Upon your first commit, please submit a Pull Request and add _both_ the **Trello Set Up** and **MVP Features** Task lists to your first Pull Request comment:

```markdown
## Trello Set Up:

- [ ] Create a Trello account
- [ ] Create a new board called "Lambda Notes - {Your Name}"
- [ ] Create lists titled `backlog`,`To Do`, `In Progress`, and `Done`
- [ ] Fill in the `To Do` list with the MVP features listed below
- [ ] Fill in the `backlog` list with all the extra features listed below
- [ ] Share your board with the project manager that has been assigned to you. If you have not been assigned yet, reach out to your lead PM for guidance
- [ ] Add your Trello URL to your project's README.md file. Commit the change, push it to your repository & submit a pull request

## MVP Features:

- [ ] Display a list of notes
- [ ] Create a note with a title and content
- [ ] View an existing note
- [ ] Edit an existing note
- [ ] Delete an existing note
- [ ] Wire up your static React App to our Notes API.
  - Now that you've completed the MVP for this project, we want to work with some data that will be persistent across a server. [We have built a Notes API](/NOTES.md) for you. You'll find information about this server in the NOTES.md file.
```

---

## Once you have completed the Minimum Viable Product requirements, direct message your project manager for approval. If approved, you may continue working on the Extra Features.

Once your MVP has been approved, you have been given a feature list that the client would love to have completed. Your goal would be to finish MVP as soon as you can and get working the list of features.

## Extra Features:

- [ ] Re-factor your code to include redux for your state-management
- [ ] Search functionality
- [ ] Markdown support in notes
- [ ] Sorting options in the list view
- [ ] Create and display tags that can be added to notes
- [ ] Drag sorting in the list view
- [ ] Add the ability to have checklists within the note view
- [ ] Export all notes to a CSV
- [ ] Create a login system around the MVP

You will notice that this repository does not have any starter code. This is on purpose. You are to start from scratch using any files you have built throughout your time here at Lambda School.
