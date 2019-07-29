![alt text](logo.jpg)


# fansiko-engage-api

# NPM

Npm module to retrieve  the content fanisko.com.

You can find more details about our API at https://fanisko.com/

# What you can do
testing API auth
retrieve all conversations
retrieve a single conversation
retrieve all messages for a specific conversation
retrieve all variables for a specific conversation

# Methods
get_content(api_key, secret_key)  
get_content_by_id(api_key, secret_key,id)

# Configuration
name	type	default	required	description
userId	String		yes	This is your user ID. You can find it in your Botsociety Profile page
apiKey	String		yes	This is your API key. You can find it in your Botsociety Profile page
debug	Boolean	false	no	Set to `true`, some debugging messages will be displayed on console

# Get your user ID and API key
Sign up at botsociety.io (it's free!)

Go to the account page

Generate the API key

# Usage example
let Botsociety = require('botsociety')


# License (ISC)
See the LICENSE file for details.

# Contributing
We love pull requests from everyone. In general, we follow the "fork-and-pull" Git workflow.

# Fork the repo on GitHub
Clone the project to your own machine  
Commit changes to your own branch  
Push your work back up to your fork  