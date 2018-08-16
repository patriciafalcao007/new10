[![Build Status](https://travis-ci.org/jaffamonkey/cypress-examples.svg?branch=master)](https://travis-ci.org/jaffamonkey/cypress-examples)

### To run

```
$ git clone https://github.com/patriciafalcao007/new10.git
$ cd new10
$ npm install
````

This will bring up the Cypress test management console:

```
$ ./node_modules/.bin/cypress open 
```

This is example of how to run an indivudal test at the command line (also generates video recording of test:

```
$ ./node_modules/.bin/cypress run --spec 'cypress/integration/examples/login1.spec.js'
```
