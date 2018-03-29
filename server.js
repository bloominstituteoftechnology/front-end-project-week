const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let nextId = 6;

let users = [
{
  username:'JMoney',
  password:'1234',
  notes:[
    {id:0, title: 'test', text:'THIS IS JMONEYS FIRST NOTE At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'},{id:1, title: 'test1', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'},{id:2, title: 'test2', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'},{id:3, title: 'test3', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'}, {id:4, title: 'test4', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'}
  ]
},
{
  username: 'theotherguy',
  password:'password',
  notes: [{id:0, title: 'other guys note', text:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'},{id:1, title: 'different', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'},{id:2, title: 'test2', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'},{id:3, title: 'test3', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'}, {id:4, title: 'test4', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'}
]
}
];

app.use(bodyParser.json());

app.use(cors());

app.get('/api/users', (req, res) => {
  res.send(users);
  
});

app.get('/api/users/:username', (req, res) => {
  const user = users.find(f => f.username == req.params.username);
  console.log(req.body);
  console.log(req.data);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.post('/api/users', (req, res) => {

  const user = { id: getNextId(), ...req.body };

  users = [...users, user];

  res.send(users);
});

app.put('/api/users/:username', (req, res) => {
  // const { id } = req.params;

  // const friendIndex = users.findIndex(f => f.id == id);

  // if (friendIndex > -1) {
  //   const friend = { ...users[friendIndex], ...req.body };

  //   users = [
  //     ...users.slice(0, friendIndex),
  //     friend,
  //     ...users.slice(friendIndex + 1),
  //   ];
  //   res.send(users);
  // } else {
  //   res.status(404).send({ msg: 'Friend not found' });
  // }
  const { username } = req.params;

  const userIndex = users.findIndex(u => u.username == username);
  
  if (userIndex > -1) {
    if (users[userIndex].password === req.body.password)
      res.send(users[userIndex].notes);
    else
      res.send('Passwords did not match');
  } else {
    res.status(404).send({msg: 'No user with that name'})
  }
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;

  users = users.filter(f => f.id !== Number(id));

  res.send(users);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
