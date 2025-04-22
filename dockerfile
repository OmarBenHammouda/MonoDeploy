FROM node:18-alpine

WORKDIR /home/src

COPY . .

RUN npm install --legacy-peer-deps

COPY  . /src

RUN npm run build

EXPOSE 3000

CMD ["npm" ,"start" ]
