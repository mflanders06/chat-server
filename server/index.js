const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));
const port = 3001;
const control = require('./controllers/messages_controller')

app.get('/api/messages', control.read);
app.post('/api/messages', control.create);
app.put('/api/messages/:id', control.update);
app.delete('/api/messages/:id', control.delete);


app.listen(port, () => console.log(`Listening on port ${port}`) );