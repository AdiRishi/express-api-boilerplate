# express-js-boilerplate

<div align="center"></strong><em>
A production ready API template based on the <a href="https://expressjs.com/">ExpressJS</a> framework
</em></strong></div>

## Pre-Requisite Installations

1. Ensure you have [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed in your system
2. (Optional) Install [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
3. Install [Docker](https://docs.docker.com/install/) (Needed for the local DB connection)

## Quickstart

1. Clone this repository using `git clone https://github.com/AdiRishi/express-js-boilerplate.git`
2. Install dependencies using `yarn install`
3. Start the local DB and migrate it using `yarn db:start && npx prisma migrate dev`
4. Start the server using `yarn dev`.

## The Hitchhicker's Guide to `express-js-boilerplate`

This section will take you through the following

- [Project Structure](#Project-Structure)

### Project Structure

<pre><font color="#3465A4"><b>express-js-template/</b></font>
├── <font color="#3465A4"><b>api-routes</b></font>
│   ├── <font color="#3465A4"><b>healthcheck</b></font>
│   └── <font color="#3465A4"><b>v1</b></font>
├── <font color="#3465A4"><b>config</b></font>
├── <font color="#3465A4"><b>controllers</b></font>
├── <font color="#3465A4"><b>dist</b></font>
│   ├── <font color="#3465A4"><b>api-routes</b></font>
│   │   └── <font color="#3465A4"><b>healthcheck</b></font>
│   └── <font color="#3465A4"><b>config</b></font>
├── <font color="#3465A4"><b>middleware</b></font>
├── <font color="#3465A4"><b>prisma</b></font>
│   └── <font color="#3465A4"><b>migrations</b></font>
│       └── <font color="#3465A4"><b>20211203063150_create_user</b></font>
└── <font color="#3465A4"><b>utils</b></font></pre>

## Developer Guide

This section goes through the various tools and procedures a developer would need when developing using this setup.

TODO
