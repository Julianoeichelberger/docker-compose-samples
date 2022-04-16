FROM node:latest

COPY ./www /usr/local/bin
WORKDIR /usr/local/bin

RUN npm install http-server -g 
RUN apt-get update & apt-get install -y git
RUN apt-get install -y curl
RUN apt-get update

ENTRYPOINT npx http-server
EXPOSE 8080
