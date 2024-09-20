const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        "author": "asdf",
        "title": "asdf",
        "content": "ggsfdgdfgfdfg"
    })
});


app.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
});



const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server running ");
})

