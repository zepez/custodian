# Custodian

This is a basic scheduler built in Node.js. 

## ENV variables 
 - title: name of the script (for logging)
 - endpoint: the endpoint that you want to trigger
 - cron: [cron interval](https://www.npmjs.com/package/cron). 
 - method: http request method
 - reqData: data to pass via endpoint
 - reqHeader: headers to pass via endpoint


## Run the project 


Clone the repo
```
  git clone https://github.com/zepez/custodian.git
```
Install the dependencies
```
  npm install
```

Alter the env to your liking

Start the server
```
  node index.js
```
or
```
  nodemon index.js
```

## Docker

To build the docker container, open the Dockerfile and alter the ENV to your liking, then run
```
  docker build .
```
then
```
  docker run YOURSHA
```