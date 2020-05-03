FROM node:10

RUN mkdir serviceFolder

WORKDIR /usr/app/

COPY . . 

RUN npm install

EXPOSE 8888

CMD ["npm", "start"]