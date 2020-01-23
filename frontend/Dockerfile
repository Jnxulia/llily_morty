FROM node:10 as builder
RUN useradd -ms /bin/bash frontend
USER frontend

WORKDIR /home/frontend
COPY . /home/frontend
ADD  package.json .
RUN npm install &&\
    npm run build &&\
    rm -rf /home/frontend/node_modules
FROM nginx
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /home/frontend/build /usr/share/nginx/html
EXPOSE  80
CMD ["nginx", "-g", "daemon off;"]