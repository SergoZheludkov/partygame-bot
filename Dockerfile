FROM node:16.15-alpine3.15

WORKDIR /app

COPY lerna.json lerna.json
COPY .graphqlconfig .graphqlconfig
COPY schema.graphql schema.graphql
COPY packages/api-client packages/api-client
COPY packages/utilits packages/utilits
COPY packages/i18n packages/i18n
COPY packages/server packages/server
COPY packages/bot packages/bot
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install
RUN yarn build
RUN yarn install

CMD ["yarn", "start"]
