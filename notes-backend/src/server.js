const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({message: "Hello world from notes"});
});

app.listen(3001, () => {
    console.log("Notes server listening on port 3001");
})