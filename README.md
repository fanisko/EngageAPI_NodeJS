![alt text](logo.jpg)


# fansiko-engage-api

# Installation

This is a Node.js module available through the npm registry.
Before installing, download and install Node.js.
Installation is done using the npm install command:    

`$ npm install fansiko-engage-api`


# What you can do
get content   
get content with id  
  

# Methods
get_content(api_key, secret_key)  
get_content_by_id(api_key, secret_key,id)

# Get your user ID and API key
Sign up at https://fanisko.com/ 

Go to the account page

Generate the API key

# Usage example  
var engage = require('fanisko-engage-api');  

  
// Getting Content   
router.post('/get_content',  async  function(req, res, next) {  
  var content =  await engage.get_content(req.body["api_key"], req.body["secret_key"])  
  res.status(200).json({ "result": content })  
});  
  
    
  
//Getting Content with id  
router.post('/get_content_by_id', async function(req, res, next) {  
  var content = await engage.get_content_by_id(req.body["api_key"], req.body["secret_key"])  
  res.status(200).json({ "result": content })  
});  


# Fork the repo on GitHub
Clone the project to your own machine.  