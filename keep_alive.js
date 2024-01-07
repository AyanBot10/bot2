const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080 || 9000 || 5555 || 5050 || 5000 || 3003 || 2000 || 1029 || 1010;

// const port = 5000

app.get('/', (req, res) => res.send('Remade By Anup Kumar!!'));

app.listen(port, () =>
	console.log(`Your app is listening a http://localhost:${port}`)
);