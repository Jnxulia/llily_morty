FROM node:10
RUN useradd -ms /bin/bash backend
USER backend
WORKDIR /home/backend
ADD  package.json .

RUN npm install 
COPY . /home/backend 
COPY environment_example.json environment.json

EXPOSE 3000 3000

