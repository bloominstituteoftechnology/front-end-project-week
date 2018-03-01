const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const notes = [
        { 
            id: 0,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 1,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 2,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 3,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 4,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 5,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 6,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 7,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 8,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 9,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 10,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
        { 
            id: 11,
            title: 'Note Title',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi turpis, varius at purus vitae, fermentum pretium justo. Nullam finibus gravida diam id euismod. Vivamus ac est venenatis, dapibus est at, venenatis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu bibendum nunc. Nulla facilisi. Donec a neque eget enim ultricies elementum id in lacus. Suspendisse tristique id diam sed suscipit. Mauris ac metus eget lorem imperdiet placerat ut id augue. Curabitur viverra mi arcu, et scelerisque ligula lobortis eu. Mauris mi turpis, gravida eu ex sed, sodales vulputate ipsum. Etiam sollicitudin eros at purus tempor, vel dictum ante porttitor. Ut dolor nisi, volutpat eu ipsum sed, convallis semper nibh.',
        },
];

app.get('/api/notes', (req, res) => {
    res.send(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const note = notes.filter(note => note.id.toString() === req.params.id)[0];
    res.status(200).json(note);
});

app.post('/api/notes', (req, res) => {
    if (req.body.id !== undefined) notes.push(req.body);
    res.status(201).json(notes);
});

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});
