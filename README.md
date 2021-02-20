# Cero a producción
Zero to Production is a project in which we will build a productivity management application. In this series of live broadcasts, I will be revealing all the complications that a programmer has when building a web app. This project is live streaming in [Twitch](https://glrz.me/stream)

## Components library
The `@glrodasz/components` library is our UI kit developed for this project. You can check its Storybook [here](https://cero-components.vercel.app) or check its repository [here](https://github.com/glrodasz/cero-components)

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
Copy scripts:
```
    "lint:css:fix": "yarn lint:css:prettier:fix && yarn lint:css:stylelint:fix",
    "lint:css:prettier:fix": "yarn lint:css:prettier --write",
    "lint:css:prettier": "prettier '**/*.css' --list-different --ignore-path .gitignore",
    "lint:css:stylelint:fix": "yarn lint:css:stylelint --fix",
    "lint:css:stylelint": "stylelint '**/*.css' --ignore-path .gitignore",
    "lint:css": "run-s lint:css:stylelint lint:css:prettier",
    "lint:fix": "run-p lint:js:fix lint:json:fix lint:css:fix ",
    "lint:js:fix": "yarn lint:js --fix",
    "lint:js": "eslint --cache --ignore-path .gitignore '**/*.js'",
    "lint:json:fix": "yarn lint:json --write",
    "lint:json": "prettier '**/*.json' --list-different --ignore-path .gitignore",
    "lint": "run-p lint:js lint:json lint:css",
    "test:watch": "CONSOLE_LEVEL=debug yarn test --watch",
    "test": "jest"
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
