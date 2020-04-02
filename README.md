# create-sandbox-app
Set up a full stack web app in one command. CI/CD hooks + AWS deploy included.

## Goals
- One command.
- Convention over configuration.
- Well documented steps.

## What's in the box?
- Monorepo
- Express backend
- React frontend
- Typescript shared across frontend/backend
- Postgres w/dev docker installation
- Terraform configuration
- Eslint+prettier+husky linting
- Github actions CI/CD

## Compromises
#### I want XYZ stack instead
We will do our best to add a few options, but only if it adds support for novel types of applications. The goal here is to get rid of framework analysis paralysis - adding more options just brings that back. 

## Future stack additions
- Worker nodes
- Database choices (Mongo, Elasticsearch)
- Server-side rendering
