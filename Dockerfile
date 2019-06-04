FROM node:10.5.0
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
CMD npm start