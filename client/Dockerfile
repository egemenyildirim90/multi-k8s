FROM node:16-alpine as builder
WORKDIR '/home/node/app'
COPY package*.json ./
RUN npm install
RUN npm install react-bootstrap bootstrap
COPY .  .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/node/app/build /usr/share/nginx/html