FROM node:10.8.0-alpine

# set working directory
RUN mkdir -p /usr/src
RUN mkdir -p /usr/src/app
WORKDIR /usr/src

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/
COPY package-lock.json /usr/src/
RUN npm install

COPY scripts /usr/src/scripts
COPY config /usr/src/config