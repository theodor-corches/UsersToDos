const users = require("./data/users.json");
const todos = require("./data/todos.json");

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
    origin: '*'
}));

//READ Request Handlers
app.get('/', (req, res) => {
    res.send('Users and ToDos API');
});
 
app.get('/api/todos', (req,res)=> {
    res.send(todos);
});
 
app.get('/api/users', (req, res) => {
    res.send(users);
});
 
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}..`));