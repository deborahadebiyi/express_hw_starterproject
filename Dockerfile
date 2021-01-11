FROM node:14  
#defines what images you re building from 
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000
CMD ["node", "server.js"]
