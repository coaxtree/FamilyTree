var express = require('express');
var router = express.Router();

// declare axios for making http requests
//var axios = require('axios');
//var API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
/*router.get('', function(req, res, next) {
  res.render('index.html');
});*/

router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
/*router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});*/

module.exports = router;