FROM node:12-alpine as build

WORKDIR /app

# package.json of root and of needed packages
COPY package.json .
COPY yarn.lock .
COPY server/package.json server/package.json

# Install at root level
RUN yarn install --pure-lockfile --non-interactive

# Get src files
COPY server server

RUN yarn workspace server build


# Production container
FROM node:12-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

COPY --from=build /app/server/package.json /app/server/package.json
COPY --from=build /app/server/dist /app/server/dist

ENV NODE_ENV production

RUN yarn install --pure-lockfile --non-interactive --production

WORKDIR /app/server

CMD ["npm", "start"]
