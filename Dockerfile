FROM node:alpine
WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3002
CMD /src/app/node_modules/.bin/ng serve --host 0.0.0.0 --port 3002 --disable-host-check
