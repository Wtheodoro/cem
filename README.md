## Table of Contents

1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Requirements](#requirements)
4. [Getting Started](#getting-started)
5. [Tests](#tests)
6. [References](#references)

# General Info

This is the initial configuration for Apegro applications. Use this project as your startup config.

## Technologies

A list of technologies used within the project:

- [Next.js](https://nextjs.org/) - React-based Javascript framework
- [Typescript](https://www.typescriptlang.org/docs/) - Open-source language which builds on JavaScript by adding static type definitions
- [Prettier](https://prettier.io/docs/en/index.html) - Code Formatter
- [ESlint](https://eslint.org/) - static code analysis tool for identifying problematic patterns
- [Husky](https://typicode.github.io/husky/#/) - Pre-commit hook
- [Commitlint](https://commitlint.js.org/#/) - Pre-format commit-messages
- [Changelog](https://github.com/conventional-changelog/standard-version) - Ordered list of the changes made on the project
- [Tailwindcss](https://tailwindcss.com/docs) - CSS Framework
- [Rosetta](https://github.com/lukeed/rosetta) - Internationalization library
- [Storybook](https://storybook.js.org/) - Tool for developing UI components in isolation
- [Jest](https://jestjs.io/) - Testing Framework
- [CI/CD and Sonarqube](https://docs.sonarqube.org/8.5/analysis/gitlab-cicd/) - Code quality test

## Requirements

- [NodeJS](https://nodejs.org/en/)
- [GitLab and SSH keys](https://docs.gitlab.com/ee/ssh/)

## Getting Started

Add new remote

```
$ git clone git@gitlab.com:apegro/base/apegro-web.git
$ cd ../pathTo/apegro-web
$ git remote add origin2 <new_project_url>
$ git push origin2 master
$ git remote rm origin2
```

Run the application

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests and scripts

Format the code and test types

```
yarn format && yarn lint --fix && yarn yarn tsc --pretty --noEmit
```

To apply tailwind modifications

```
yarn build-storybook-css
```

Manual pre-push tests

```
yarn build-storybook && yarn test-full -u && yarn build
```

## References

- UI references - (https://tailwindui.com/components)
- Atomic Design - (https://atomicdesign.bradfrost.com/table-of-contents/)
- Commit messsage must have valid type and subject - (https://www.conventionalcommits.org/en/v1.0.0/#summary)
- ESLint temporary disable - https://eslint.org/docs/2.13.1/user-guide/configuring#disabling-rules-with-inline-comments)
- Front-of-the-front-end and back-of-the-front-end web development - (https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/)
