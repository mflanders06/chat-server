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
        console.log(id);
    }

}