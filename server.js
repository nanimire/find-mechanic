const express = require('express');
const { response } = require('express');
const fetchAPI = require('node-fetch');
const cors = require('cors');
const port = 5000;
const path = require('path');
// APP INIT
const app = express();

var corsOptions = {
    origin: 'http://localhost:3000'
  }
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/build')));

// Configure api routes
app.get('/mechanics', cors(corsOptions), async (req, res) => {
    try {
    const api_url = 'https://jsonplaceholder.typicode.com/users';
    // Fetch call to external API
    const fetch_response = await fetchAPI(api_url);
    const json = await fetch_response.json();
    return res.json(json);
    } catch (e) {
        console.log(e);
    }
});

app.get('/', (req,res) => {
    res.send(`<h1>API Running on the port ${port}</h1>`);
  });

app.listen(port, () => console.log(`server started on ${port}`));
