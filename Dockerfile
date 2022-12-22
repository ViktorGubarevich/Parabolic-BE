FROM node:16

WORKDIR /app

# ENV PATH="/app/node_modules/.bin:$PATH"

COPY package.json /app

RUN npm install

COPY . .

ENV PORT 1337

EXPOSE $PORT

VOLUME ["/app/data"]

CMD ["npm", "run", "develop"]
