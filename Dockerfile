FROM node:16.15.1
# Add --production flag to yarn command for release build
WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD npm start
