import express from 'express';

const app = express();
const port = 8080;
const host = 'localhost';

app.get('/',(req, res) => {
    res.send('Hello world');
});

app.listen(port, host, () => {
    console.log(`Example app is listening at http://localhost:${port}`);
});