# Cero a producción
Zero to Production is a project in which we will build a productivity management application. In this series of live broadcasts, I will be revealing all the complications that a programmer has when building a web app. This project is live streamed in https://glrz.me/glrodasz.

## Components library
The project is located [here](https://github.com/glrodasz/cero-components)

## Welcome to the Web
### Install JSON Server
- Install JSON server as a dev dependency `yarn add --dev json-server`
- Create a file called `db.json`
- Create an script `dev:api: "dev:api": "json-server --watch db.json --port 3001"`
### React Query
- Install React Query `yarn add react-query`

### Linting, Scritps
Copy config files:
* .commitlintrc.json
* .eslintrc.json
* .huskyrc.json
* .lintstagedrc.json
* .prettierrc.json
* .stylelintrc.json
* .jest.config.js (modified)
* .jest.setup.js
Add dependencies
```
yarn add --dev npm-run-all @commitlint/cli @commitlint/config-conventional commitizen eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react husky jest lint-staged prettier stylelint stylelint-config-idiomatic-order stylelint-config-recommended @mapbox/stylelint-processor-arbitrary-tags
```
### Folder Structure
### Developing an Organism
### Environment variables
### Events in Components
### Error handling
### Unit testing
### Snapshot testing
### Visual tests
### Integration test


## Connecting both worlds
### Configuring Hapi
### Environment variables
### Configuring Mongoose
### Folder Structure
### Developing a Service
### Logging requests
### Error handling
### Unit testing
### Integration test
### End-to-end tests

## i18n
### Supporting languages [Web]
### Supporting languages [Api]

## Bundling
### Webpack configuration [Web]
### Frontend Optimization [Web]

## Emailing layer
### Email template system [Api]
### Setup email service [Api]

## Continuous integration & deployment
### Docker
### Kubernetes
### Jenkins
