# Custodian

This is a basic scheduler built in Node.js. 

## ENV variables 
 - title: name of the script (for logging)
 - endpoint: the endpoint that you want to trigger
 - cron: [cron interval](https://www.npmjs.com/package/cron). 
 - method: http request method
 - reqData: data to pass via endpoint
 - reqHeader: headers to pass via endpoint


## Todo
 - add docker support