FROM node
WORKDIR /opt/runner
COPY app.js .
COPY package*.json ./
RUN npm install
CMD [ "node", "app.js" ]
