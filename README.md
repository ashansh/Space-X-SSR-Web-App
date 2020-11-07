# Space-X-SSR-Web-App

# https://space-x-ssr-web-app.herokuapp.com

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Description

The app is built using Space-X public api and is Server Side Rendered using Angular Universal.
Please find the Lighthouse report attached.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deployment Doc on Heroku with Automated Builds

Heroku Deployment Article - https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147

## Configuration for Server Side Rendering an Angular App

Article - https://blog.jscrambler.com/setting-up-angular-server-side-rendering-ssr/

## Steps to run on local server with Server Side Rendering

`Git Clone`
`Npm install`
Without Server Side Rendering : `ng serve`
With Server Side Rendering : `npm run build:ssr` to build the app followed by `npm run serve:ssr` the app will be up and running on `localhost:4000`
