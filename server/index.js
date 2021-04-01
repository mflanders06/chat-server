const express = require('express');
const app = express();
app.use(express.json());
const port = 3001;
const control = require('./controllers/messages_controller')

app.get('/api/message', control.read);
app.post('/api/message', control.create);


app.listen(port, () => console.log(`Listening on port ${port}`) );