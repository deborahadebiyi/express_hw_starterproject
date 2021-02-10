FROM node:14 as base  
#defines what images you re building from 
WORKDIR /app

#copies it into the top level
COPY package*.json ./

RUN npm install

COPY src src

#creating test image
FROM base as test

COPY spec spec

