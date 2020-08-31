FROM nginx:1.16.0-alpine

COPY dist/apps/chat /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]