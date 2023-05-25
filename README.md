# evalx.sh

:rocket: Welcome to the evalx.sh repository! This repository houses the codebase for evalx.sh, a powerful service that provides evaluation and execution capabilities for various programming languages. This readme provides information about the project, setting up the development environment, and the licensing details.

## About

Evalx.sh is a service designed to simplify the process of evaluating and executing code in different programming languages. It allows developers to quickly test their code snippets, run algorithms, or experiment with different programming paradigms.

## Dev Environment

To set up the development environment for evalx.sh, follow the steps below:

1. Install [turborepo](https://turborepo.dev/) and [pnpm](https://pnpm.js.org/) if you haven't already.

2. Clone the evalx.sh repository:
```shell
git clone https://github.com/zaida04/evalx.sh.git
```

3. Navigate to the directory and install dependencies:
```shell
cd evalx.sh & pnpm install
```

4. Build the project:
```shell
pnpm run build
```

5. Start up the services you need:
```shell
cd apps/runner && pnpm dev
cd apps/site && pnpm dev
```

## License
This project is licensed under the MIT License. You can find the full text of the license in the LICENSE file.