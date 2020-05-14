FROM node:12-alpine as build

WORKDIR /

# package.json of root and of needed packages
COPY package.json .
COPY yarn.lock .
COPY babel.config.js .
COPY app/package.json app/package.json
COPY api-client/package.json api-client/package.json
COPY common/package.json common/package.json

# Install at root level
RUN yarn install --pure-lockfile --non-interactive

# Get src files
COPY app app
COPY api-client api-client
COPY common common

RUN yarn workspaces run build


# Production container
# FROM node:12-alpine

# WORKDIR /

# COPY package.json .
# COPY yarn.lock .

# COPY --from=build /app/package.json /app/package.json
# COPY --from=build /app/.next /app/.next

ENV NODE_ENV production

# RUN yarn install --pure-lockfile --non-interactive --production

WORKDIR /app

EXPOSE 3001

CMD ["npm", "start"]
