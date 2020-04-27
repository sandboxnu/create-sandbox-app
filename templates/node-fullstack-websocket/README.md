# Full stack web app with websockets

## Quick Start

1. [Get Docker](https://docs.docker.com/get-docker/) so we can automatically run and setup Postgres
2. Make sure you have [node](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/en/docs/install) installed. `yarn -v` should be `1.x.x`. Do not get Yarn 2.
3. Run `yarn install` in this directory to get dependencies
4. Run `yarn dev:db:up` to start the database via docker. `yarn dev:db:down` will stop it.
5. Start the app in development with `yarn dev`

## Technologies

- [Next.js](https://nextjs.org/docs/getting-started) lets us do server-side and client-side React rendering, as well as write backend API endpoints. It also gives us developer ergonomics like hot reload in dev.

- [Socket.io](https://socket.io/docs/) manages websocket communication on server and client

- [Typescript](https://www.typescriptlang.org/docs/home.html) lets us write maintainable, scalable Javascript

- [Postgresql](https://www.postgresql.org/docs/11/index.html) is a very reliable and popular SQL database that is great for 99% of applications

- [TypeORM](https://typeorm.io/) lets us query Postgres easily and with Typescript validating our schema. 

- [Docker](https://www.docker.com/products/docker-desktop) sets up a consistent Postgres environment on all developer's machines

