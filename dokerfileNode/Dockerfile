FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "nodejs_helloword.js"]

EXPOSE 8080
