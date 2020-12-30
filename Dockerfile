# base image
FROM node:carbon as build

# set working directory
RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN npm install --silent
COPY . /usr/src/app

RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine

RUN rm -rf /etc/nginx/conf.d
COPY --from=build /usr/src/app/nginx/conf /etc/nginx

COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
