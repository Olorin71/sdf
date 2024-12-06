FROM nginx:latest

COPY ./dist/socrates-franken /usr/share/nginx/html

RUN mkdir -p /etc/nginx/conf.d

COPY ./nginx_conf /etc/nginx/conf.d/
