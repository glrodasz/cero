# cero-a-produccion

# Course Outline
## Hello world
### Storybook configuration [Components]
- `npx sb init`
- Choose that is a React project
- `yarn storybook`
- Add font base size to `main.css` and a reset (https://jgthms.com/minireset.css/, https://github.com/necolas/normalize.css/)*
- Add typography*
### Design Tokens [Components]
- Create tokens/index.js file
- Create `build-tokens` script
- Add brand colors to tokens
- Add the rest of the tokens based on the project*
### Atoms & Molecules [Components]
- Create Paragraph Atom*
- Create Heading Atom
- Create Button Atom
- Create Icon Atom
- Create Picture Atom
- Create ButtonIcon Molecule
- Create Spacer's Layout
### Lint and styling [Components, Web]
- Add [EditorConfig](https://github.com/airbnb/javascript/blob/master/.editorconfig)
- Add ESLint and Prettier
1. Install ESLint and create a config file following the instructions [here](https://eslint.org/docs/user-guide/getting-started#installation-and-usage)
2. Intall the prettier configuration along ESLint following [these](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration) instructions
3. Finally configure the precommit hook with lint-staged [here](https://prettier.io/docs/en/precommit.html#option-1-lint-stagedhttpsgithubcomokonetlint-staged)
### Redux configuration [Web]
### Folder Structure [Web]
### Environment variables [Web]

## Connecting both worlds
### Developing an Organism [Components]
### Configuring Hapi [Api]
### Environment variables [Api]
### Configuring Mongoose [Api]
### Folder Structure [Api]
### Developing a Service [Api]

## Logging & Events
### Events in Components [Web]
### Error handling [Web]
### Logging requests [Api]
### Error handling [Api]

## Testing
### Unit testing [Web]
### Snapshot testing [Web]
### Visual tests [Components, Web]
### Integration test [Web]
### Unit testing [Api]
### Integration test [Api]
### End-to-end tests [Web]

## i18n
### Supporting languages [Web]
### Supporting languages [Api]

## Bundling
### Webpack configuration [Web]
### Frontend Optimisation [Web]

## Emailing layer
### Email template system [Api]
### Setup email service [Api]

## Continuous integration & deployment
### Docker
### Kubernetes
### Jenkins


# Notes
## Atomic Design
- Atom: A atom is a component that composed by an unique Atom with/without HTML tags or just HTML tags.
- Molecule: A molecule is a component that is composed by at least 2 diffent atoms.
