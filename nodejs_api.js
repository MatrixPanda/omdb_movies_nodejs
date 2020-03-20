let express = require('express');
let app = express();
// let session = require('express-session');
// let uuid = require('uuid/v1');
let bodyParser = require('body-parser');

// middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('src'));


var showtimes = [
      {
         id: 'tt0059742',
         detailsURL: '/movieDetails?id=tt0059742',
         title: 'The Sound of Music',
         times: ['7:15pm', '8:40pm']
      },
      {
         id: 'tt0059113',
         detailsURL: '/movieDetails?id=tt0059113',
         title: 'Doctor Zhivago',
         times: ['7:35pm', '8:10pm', '9:05pm']
      },
      {
         id: 'tt0059243',
         detailsURL: '/movieDetails?id=tt0059243',
         title: 'The Great Race',
         times: ['6:45pm', '9:15pm']
      },
      {
         id: 'tt0059578',
         detailsURL: '/movieDetails?id=tt0059578',
         title: 'For a Few Dollars More',
         times: ['8:05pm', '9:40pm']
      },
      {
         id: 'tt0059661',
         detailsURL: '/movieDetails?id=tt0059661',
         title: 'The Rounders',
         times: ['4:10pm']
      },
      {
         id: 'tt0059800',
         detailsURL: '/movieDetails?id=tt0059800',
         title: 'Thunderball',
         times: ['8:00pm']
      }
   ];

// var info = JSON.stringify(showtimes);

app.get('/showtimes', (request, response) => { response.send(showtimes); });
// app.get('/showtimes', (request,response) => {
//     response.sendFile(__dirname + '/src/showtimes.html');
// });


app.set('port', 3001);
app.listen(app.get('port'), () => {
    console.log('Node.js/Express is listening on port ' + app.get('port'));
});

// let express = require('express');
// let app = express();
// let bodyParser = require('body-parser');

// // middleware
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static('src'));

// app.get('/showtimes', (request,response) => {
//     response.sendFile(__dirname + '/src/showtimes.html');
// });

// app.set('port', 3001);

// app.listen(app.get('port'), () => {
//     console.log('Node.js/Express is listening on port ' + app.get('port'));
// });