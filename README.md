Create Sandbox App helps you setup and deploy the right tech stack for your needs. Avoid costly technical architecture mistakes and start building your project today. Give the CLI your requirements, and it'll scaffold all the starter code you need.

## Why?
Sandbox starts ~4 new projects from scratch each semester. Every project begins with a week to a month of deliberating and switching between technologies. Should we use Rails? What about Typescript? Redux? NextJS? NestJS? NuxtJS? 

Not only is this a waste of time, we end up **making the same technical mistakes** semester after semester as each team makes their own independent decisions. The tech stacks here are the result of what we've learned through the years, and should get our new projects on a happy path by avoiding our past mistakes.

## Principles
- Convention over configuration.
- Well documented.

## What's in the box?
- One command to setup, another to deploy.
- Monorepo
- Express backend
- React frontend
- Typescript across project and to document API
- Postgres w/dev docker installation
- Terraform configuration
- Deploy to AWS (ECS + RDS)
- Eslint+prettier+husky linting
- Github actions CI/CD

## Compromises
#### I want XYZ stack instead
We will do our best to add a few options, but only if it adds support for novel types of applications. The goal here is to get rid of framework analysis paralysis - adding more options just brings that back. 

## Future stack additions
- Worker nodes
- Database choices (Mongo, Elasticsearch)
- Server-side rendering
- Generator script (like rails generate)
