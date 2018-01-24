
const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./users')
const app = express();

app.use(bodyParser.json());
app.use(express.static('./users'))

app.post('/api/users', ctrl.create)
app.get('/api/users', ctrl.read)
app.delete('/api/users/:id', ctrl.delete)
app.put('/api/users/:id', ctrl.update)



const port = 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
