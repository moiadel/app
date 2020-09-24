FROM nginx:1.19.0
RUN apt-get update -y
COPY source  /etc/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
COPY nginx/SSL  /etc/nginx
COPY nginx/install.sh /tmp/install.sh
RUN /tmp/install.sh
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


