const CronJob = require('cron').CronJob;
require('dotenv').config()
const axios = require('axios');
const logger = require('./logger')

const d = new Date();
logger.log({
  level: 'info',
  message: 'Starting ' + process.env.title + " | " + d
});

const job = new CronJob(process.env.cron, function() {
  const d = new Date();
  logger.log({
    level: 'info',
    message: 'Running ' + process.env.title + " | " + d
  });
  
  axios({
    method: process.env.method, 
    url: process.env.endpoint,
    data: JSON.parse(process.env.reqData),
    headers: JSON.parse(process.env.reqHeader)
  }).then((res) => {
    logger.log({
      level: 'info',
      message: 'Success ' + process.env.title + " | " + d + " | " + res.data
    });
  }).catch((e) => {
    logger.log({
      level: 'error',
      message: 'Error: ' + process.env.title + " | " + d + " | " + e
    });
  })
});


// start job
job.start();