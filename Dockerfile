FROM node:6
EXPOSE 80

WORKDIR /home/node/app
COPY . /home/node/app/

RUN npm install
RUN npm run build

CMD PORT=80 NODE_ENV=production node lib/index.js
