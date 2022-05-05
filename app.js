const express = require('express');
const request = require('request');
const app = express();

/** El módulo request está deprecado */

/** En su lugar una alternativa es axios */
// const axios = require('axios').default;

// https://www.npmjs.com/package/axios

// make a simple request in axios
// axios.get('https://api.bitbucket.org/2.0/users/rsdiaz')
//   .then((response) => {
//     // handle success
//     console.log(response.data);
//   })
//   .catch((error) => {
//     // handle error
//     console.log(error);
//   })
//   .finally(() => {
//     // always executed
//     console.log('good job, end to make request in axios...');
//   })

/** otra alternativa con Fetch */
// const node_fetch = require('node-fetch');

// https://www.npmjs.com/package/node-fetch

// make a simple request in node-fetch
// node_fetch('https://api.bitbucket.org/2.0/users/rsdiaz')
//   .then((res) => {
//     return res.json();
//   })
//   .then((json) => {
//     return console.log(json)
//   })
//   .catch((error) => {
//     return console.error(error)
//   })
//   .finally(() => {
//     console.log('god job, end to make request in node-fetch...');
//   });

/** Estas dos líneas reemplazan a body-parser */
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    console.log(firstName, lastName, email);

});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});