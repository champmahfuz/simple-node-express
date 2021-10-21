const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('I am exicted learn to learn to and express with nodemon automatic restart')
});
const users = [
    { id: 0, name: 'Sabana', email: 'sabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnur', email: 'shabnur@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Srabonti', email: 'srabonti@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'sonia', email: 'sonia@gmail.com', phone: '01788888888' },
    { id: 5, name: 'simla', email: 'simla@gmail.com', phone: '01788888888' }
]
app.get('/users', (req, res) => {
    const search = (req.query.search);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hittig the post', req.body)
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oreanges', 'banana'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('Listining to port', port);
})
