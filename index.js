const express = require('express');
const helloDolly = require('hello-dolly');

const app = express();

app.get('/', (req, res) => {
    const dollyQuote = helloDolly();
    res.send(dollyQuote);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

