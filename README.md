!# SSP Client

The Syft Software Platform (SSP) provides an open architecture for building software applications for SIFT-MS instruments. 

The SSP Client web application provides the user interface for SIFT-MS instruments.

The application is built with:

- [React](https://reactjs.org/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [Apollo React Client](https://www.apollographql.com/docs/react/)
- [Reach Router](https://reach.tech/router)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Styled System](http://jxnblk.com/styled-system) and associated [system-components](https://github.com/jxnblk/styled-system/tree/master/system-components)
- [i18n](https://react.i18next.com/) internationalization

### Contents

- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Debugging](#debugging)
- [GraphQL](#graphql)
- [Contributing](#contributing)
- [Coding Standards](#coding-standards)

## Requirements

You must have the current [LTS](https://github.com/nodejs/Release) version of [Node.js](https://nodejs.org/en/) and npm (installed with Node.js) and optionally [yarn](https://yarnpkg.com/en/) installed on your machine.


## Getting Started
 
Install dependencies:

`npm install` or `yarn install`

Run the development server:

`npm run dev` or `yarn dev`

This will start the [webpack development server](https://webpack.js.org/configuration/dev-server/) and serve the client application on `http://localhost:3000`.

The development server proxies requests to the SSP GraphQL API on `http://localhost:3002`.

## Deployment

To build the source for deployment:
 
 `node run build` or `yarn build`
 
This will generate build output in the `build` directory. To deploy copy the `build` directory to your production server. 

Typically you will copy to the `public` directory that serves the client `index.html` file by default.

You should also ensure that the web server is setup to forward unhandled requests to `index.html` for HTML5 mode endpoint routes. 

## Debugging

Use [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) with the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) extension. 

## GraphQL

The platform provides a [GraphQL](http://graphql.org/) API using [Apollo](https://www.apollographql.com/).

In development, Apollo Server enables [GraphQL Playground](https://github.com/prisma/graphql-playground) on the same URL as the GraphQL server itself (`http://localhost:3002/graphql`) and automatically serves the GUI to web browsers.

## Contributing

See our [CONTRIBUTING](.github/CONTRIBUTING.md) guide for more details.

### Golden Rules

- Never work on master, create your own topic/feature branch first.
- Never push changes directly to master.
- Never merge your own Pull Request (unless it has been approved by another team member).
- Make your work visible, participate, and release frequently.  

### Opening a new Issue

- Check that the _Issue_ you want to raise has not been opened already. Make sure to also check closed issues.
- Open a new issue and apply the most relevant _label/s_ if any.
- _@mention_ specific team members you want to discuss the issue with.
- If the issue a bug provide as much information as possible so others can reproduce it. 
- Create a [gist](https://gist.github.com) or link to an example to share more details.

### Working on an Issue

- Claim an _Issue_. You can self-assign an issue or an issue can be assigned to you.
- Decide how to solve it and discuss your ideas using comments on the issue.
- Create a local branch off _master_ and start working on the issue.
- Make regular commits on your local branch and push the branch to the upstream repository.
- Open a _Pull Request_ so team members can see your progress and provide feedback. 
- If you do not want to merge your PR _WIP_ to the PR subject. You can edit it later.
- Once the PR is open you can use it for further discussion, you do not need to open a new PR.
- When done close the PR or remove WIP and request final review and  _merge_ by another team member.

## Coding Standards

* Use modern [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript) as supported by [Babel Stage 2](https://babeljs.io/docs/plugins/preset-stage-2/).
* Semicolons `;` are required. Do not rely on automatic semicolon insertion.
* Use [ESLint](https://eslint.org/) with the project (`.eslintrc`) configuration: `npm run eslint`
* Use [Prettier](https://prettier.io/) with the project (`.prettierrc`) configuration : `npm run prettier`
* Use [Lodash](https://lodash.com/) and preferably [Lodash FP](https://github.com/lodash/lodash/wiki/FP-Guide) rather than your own JavaScript utility functions.
* We do not enforce but prefer the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
* We like these [noteworthy points](https://medium.freecodecamp.org/google-publishes-a-javascript-style-guide-here-are-some-key-lessons-1810b8ad050b) from the Google JavaScript style guide.
* Prefer [functional programming](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536) where possible (map, filter, reduce).
* Prefer duplication over the wrong abstraction.

_Always run ESLint and run Prettier on your code before submitting a Pull Request._



# SSP Server

The Syft Software Platform (SSP) provides an open architecture for building software applications for SIFT-MS instruments. 

The SSP Server exposes instrument data and control APIs for external applications.

The platform is built on [Node.js](https://nodejs.org/en/) JavaScript runtime using [Apollo GraphQL Express Server](https://github.com/apollographql/apollo-server) to provide a GraphQL API.

### Contents

- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Debugging](#debugging)
- [GraphQL](#graphql)
- [Contributing](#contributing)
- [Coding Standards](#coding-standards)

## Requirements

You must have:
 
 - current [LTS](https://github.com/nodejs/Release) version of [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) (typically installed with Node.js) or [yarn](https://yarnpkg.com/en/).
 - current version of [PostgreSQL](https://www.postgresql.org/) which is used for data storage and the GraphQL subscriptions queue.
 - current version of [pgAdmin](https://www.pgadmin.org/) PostgreSQL administration and development web application.

_IMPORTANT: Ensure that these dependencies are installed correctly and have the correct permissions._

## Getting Started

Install dependencies:

`npm install` or `yarn install`

Create a database and role on your PostgreSQL server using `pgAdmin`:

1. Create a new Login/Group Role, provide a name: `ssp`, password, enable allow login, and select the Superuser option. Accept all the other defaults.
2. Create a new database, provide a name: `ssp` and set the Owner to the role (`ssp`) created in step 1. Accept all the other defaults.
3. Right-click on Extensions and add the `uuid-ossp` extension. 
4. Right-click on the new database and select Restore. Select the backup file located in `/data` and set the Role name to the role created in step 1.
5. After restore completes you should not see any error notifications. You can view the tables in the schema and run a query on the `account` table. The default admin and user accounts should be in the query results.

_Note: For security you should not create unnecessary super user roles. Since this is a development database on your local machine using a super user role provides easier configuration and flexibility._

Set your PostgreSQL server and the SSP database connection parameters in `config/default.json`.

Run the development server:

`npm run dev` or `yarn dev`

This will start the platform server and exposes the GraphQL API on `http://localhost:3002/graphql`

## Deployment

To build the source for deployment:
 
 `node run build` or `yarn build`
 
This will generate build output in the `build` directory. To deploy copy the `build`, `config`, and `public` directories, and `package.json` file to your production server.

The production configuration is set in `config/production.json`. You should use `port: 443` for SSL in production.

## Debugging

Install [ndb](https://github.com/GoogleChromeLabs/ndb) globally for debugging Node.js code using [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/). 

## GraphQL

The platform provides a [GraphQL](http://graphql.org/) API using [Apollo](https://www.apollographql.com/).

In development, Apollo Server enables [GraphQL Playground](https://github.com/prisma/graphql-playground) on the same URL as the GraphQL server itself (`http://localhost:3002/graphql`) and automatically serves the GUI to web browsers.

## Contributing

See our [CONTRIBUTING](.github/CONTRIBUTING.md) guide for more details.

### Golden Rules

- Never work on master, create your own topic/feature branch first.
- Never push changes directly to master.
- Never merge your own Pull Request (unless it has been approved by another team member).
- Make your work visible, participate, and release frequently.  

### Opening a new Issue

- Check that the _Issue_ you want to raise has not been opened already. Make sure to also check closed issues.
- Open a new issue and apply the most relevant _label/s_ if any.
- _@mention_ specific team members you want to discuss the issue with.
- If the issue a bug provide as much information as possible so others can reproduce it. 
- Create a [gist](https://gist.github.com) or link to an example to share more details.

### Working on an Issue

- Claim an _Issue_. You can self-assign an issue or an issue can be assigned to you.
- Decide how to solve it and discuss your ideas using comments on the issue.
- Create a local branch off _master_ and start working on the issue.
- Make regular commits on your local branch and push the branch to the upstream repository.
- Open a _Pull Request_ so team members can see your progress and provide feedback. 
- If you do not want to merge your PR _WIP_ to the PR subject. You can edit it later.
- Once the PR is open you can use it for further discussion, you do not need to open a new PR.
- When done close the PR or remove WIP and request final review and  _merge_ by another team member.

## Coding Standards

* Use modern [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript) as supported by [Babel Stage 2](https://babeljs.io/docs/plugins/preset-stage-2/).
* Semicolons `;` are required. Do not rely on automatic semicolon insertion.
* Use [ESLint](https://eslint.org/) with the project (`.eslintrc`) configuration: `npm run eslint`
* Use [Prettier](https://prettier.io/) with the project (`.prettierrc`) configuration : `npm run prettier`
* Use [Lodash](https://lodash.com/) and preferably [Lodash FP](https://github.com/lodash/lodash/wiki/FP-Guide) rather than your own JavaScript utility functions.
* We do not enforce but prefer the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
* We like these [noteworthy points](https://medium.freecodecamp.org/google-publishes-a-javascript-style-guide-here-are-some-key-lessons-1810b8ad050b) from the Google JavaScript style guide.
* Prefer [functional programming](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536) where possible (map, filter, reduce).
* Prefer duplication over the wrong abstraction.

_Always run ESLint and run Prettier on your code before submitting a Pull Request._