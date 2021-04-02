const messages = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(messages);
    },

    create: (req, res) => {
        const { text, time } = req.body;
        const newMessage = {id, text, time};
        messages.push(newMessage);
        res.status(200).send(messages);
        id++;
    },

    update: (req, res) => {
        const { id } = req.params;
        const { text } = req.body;
        const index = messages.findIndex( (value) => value.id === parseInt(id) );
        messages[index].text = text;
        res.status(200).send(messages);
    },

    delete: (req, res) => {
        const { id } = req.params;
        const index = messages.findIndex( (value) => value.id === parseInt(id) );
        messages.splice(index, 1);
        res.status(200).send(messages);
    }

}