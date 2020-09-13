FROM nginx:latest

COPY dist/socrates-franken/* /usr/share/nginx/html
