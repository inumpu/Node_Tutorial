const express = require('express')
var file_work = require('./filework');  
const app = express()  
const port = 3000

var bodyParser= require('body-parser')
app.use(bodyParser.json())


app.post('/search', (request, response) => {  
  console.log("Received Search Request For String "+ request.body.string_to_search );
  file_work.find_occurances(request.body.string_to_search, function(file_list){
  response.send(file_list);
  });
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})