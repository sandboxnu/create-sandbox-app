# Full stack web app with websockets

## Installation

1. [Get Docker](https://docs.docker.com/get-docker/) so we can automatically run and setup Postgres
2. Make sure you have [node](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/en/docs/install) installed. `yarn -v` should be `1.x.x`. Do not get Yarn 2.
3. Run `yarn install` in this directory to get dependencies
4. Run `yarn dev:db:up` to start the database via docker. `yarn dev:db:down` will stop it.
5. Run `yarn migrate` to migrate the database and setup prisma client lib
5. Start the app in development with `yarn dev`

## Technologies

- [Next.js](https://nextjs.org/docs/getting-started) lets us do server-side and client-side React rendering, as well as write backend API endpoints. It also gives us developer ergonomics like hot reload in dev.

- [Socket.io](https://socket.io/docs/) manages websocket communication on server and client

- [Typescript](https://www.typescriptlang.org/docs/home.html) lets us write maintainable, scalable Javascript

- [Postgresql](https://www.postgresql.org/docs/11/index.html) is a very reliable and popular SQL database that is great for 99% of applications

- [TypeORM](https://typeorm.io/) lets us query Postgres easily and with Typescript validating our schema. 

- [Docker](https://www.docker.com/products/docker-desktop) sets up a consistent Postgres environment on all developer's machines


## File Structure

`/app` is a the next.js app. Routing is done using the file system. For example, the page `/app/pages/xyz.tsx` would be served at `domain.com/xyz`. Pages are rendered server-side and hydrated client side. Data fetching can happen on the server or client.  [Learn more](https://nextjs.org/docs/basic-features/data-fetching)

`/server` is the server that runs the REST API and websockets. Each API resource gets a router file inside `/server/api`.

`/shared` is included in both app and server. Primary purpose is to share types for typescript, though it may also be possible to share utility functions.
