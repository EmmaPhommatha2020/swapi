var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const results = [];
  axios.get('https://swapi.co/api/people')
  .then(response => {
    console.log(results);    
    results = response.data.results;
    console.log(results);
  })
  // .catch(res => {
  //   console.log(res);
  // })
  console.log(results, 'RESULTS');
  res.send(results);

});

module.exports = router;
