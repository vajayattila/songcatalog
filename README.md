# Songcatalog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

## Install source and node enviroment

-  Create new angular project:
````
ng new songcatalog
````
- Copy app folder to new project's app folder (overwrite exist files)
- Install ngx-bootstrap node module (https://www.npmjs.com/package/ngx-bootstrap):
````
npm install ngx-bootstrap --save
npm install bootstrap@3
````
- Configure bootstrap in .angular-cli.json (https://github.com/valor-software/ngx-bootstrap/blob/development/docs/getting-started/bootstrap4.md):
````
"styles": [  
   "../node_modules/bootstrap/dist/css/bootstrap.min.css",  
   "styles.css"  
   ],
````

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
