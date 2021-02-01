FROM node:14

ENV title="Example script name"
ENV endpoint="http://host.docker.internal:3000/example/endpoint"
ENV cron="0 * * * * *"
ENV method="post"
ENV reqData={}
ENV reqHeader={}
ENV TZ="America/New_York"

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "node", "index.js" ]
