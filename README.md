<!-- Trello Link -->
https://trello.com/b/uwTGQGXM/lambda-notes-andrew-kolumbic

########## Fonts & Colors ############

Heading font: Roboto Bold
Everything else font: Raleway Medium

Heading and main font color: #4A4A4A
Button font color: #FFFFFF

Sidebar background: #D8D8D8
Main background: #F3F3F3
Main button background: #2BC1C4
rgb(43, 193, 196)
Delete button background: #D0021B
Border color used throughout: #979797

########## SERVER INFO ###############

Ryan's note server can be found here:
https://killer-notes.herokuapp.com

One thing to be aware of is that this server is a shared resource. Any notes you enter will be viewable to everyone who connects to the server.
A note has this basic format:

  {
    "tags": ["tag", "otherTag"],
    "title": "Note Title",
    "textBody": "Note Body",
  }

There is also an "_id" attribute, which is a long string of numbers and letters. It is automatically assigned by the server and will be returned as part of the data.

https://killer-notes.herokuapp.com/note/get/all
a GET request to this route will return a list of all the notes.

https://killer-notes.herokuapp.com/note/get/id
a GET request to this route (with "id" replaced by the note ID) will return the note with the specified ID.

https://killer-notes.herokuapp.com/note/create
a POST request to this route with the title and text in the req.body will create a new note. The response from the server will be the ID of the new note.

https://killer-notes.herokuapp.com/note/edit/id
a PUT request to this route with the title and text in the req body will edit the note with the specified ID. The response from the server will be the updated note object.

https://killer-notes.herokuapp.com/note/delete/id
a DELETE request to this route will delete the note with the specified ID.

######################################################################

# Front End Project Week

This week you will be building a minimum viable product (MVP) for a note taking app called "Lambda Notes."

You are to treat this week as if you are working at a company and the instructor is your client. The project managers will be your main support throughout the week.

The main objective of this week is to develop the MVP feature set listed below using react and any other technologies you have learned here at Lambda School. There are design files in this repository you should use as a creative guide.

## Git Commits

- You are required to showcase progress with at least 1 commit a day. This will let your project manager know where you are and if you need help. This also allows the client to get progress reports from the company in a real world setting.

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
```

---

## Once you have completed the Minimum Viable Product requirements, direct message your project manager for approval. If approved, you may continue working on the Extra Features.

Once your MVP has been approved, you have been given a feature list that the client would love to have completed. Your goal would be to finish MVP as soon as you can and get working the list of features.

## Extra Features:

- [ ] Wire up your static React App to our Notes API.
  - Now that you've completed the MVP for this project, we want to work with some data that will be persistent across a server. [We have built a Notes API](/NOTES.md) for you. You'll find information about this server in the NOTES.md file.
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
