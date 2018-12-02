FROM container-ui

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY ./app-local/ui/package.json /usr/src/app/package.json
COPY ./app-local/ui/package-lock.json /usr/src/app/package-lock.json
RUN npm install

COPY ./app-local/ui/src /usr/src/app/src
COPY ./app-local/ui/public /usr/src/app/public


# set working directory
WORKDIR /usr/src
