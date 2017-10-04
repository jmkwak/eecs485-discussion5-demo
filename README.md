# eecs485f17-discussion5-demo

A hands on demo for EECS 485 Fall 2017 Discussion 5.

Contents:
1. [Objective](#objective)
2. [Setup](#setup)
3. [Overview](#overview)

## Objective

Create a react widget that generates random words. The widget should display a 
list of words along with a button that adds a new word to the list.

## Setup

### Using Vagrant
If you'd like to use vagrant, the only setup you'll need to do is to change into
the project repo and initialize the vagrant machine:
```shellsession
$ cd $DEMO_ROOT
$ vagrant up
```

You can then `ssh` into the vagrant machine and continue along with 
[Overview](#overview).

### Using Local Environment
If you'd like to develope locally, you'll need to create a new python virtual
environment and a node environment as well as install the proper python and 
node packages. We've included a `setup.py` and `package.json` for you in this 
repository. Thus you can create the environments and install the packages with 
the following commands:
```shellsession
$ cd $DEMO_ROOT
$ python3 -m venv env
$ source env/bin/activate
$ pip install nodeenv
$ nodeenv --python-virtualenv
$ source env/bin/activate  # again, after installing node
$ pip install -e .
$ npm install .
```

## Overview

### `randomsite`
We provide a Flask app named `randomsite`. The `randomsite` app can be started
with the provided executable `./bin/randomsiterun`.

`randomsite` has two routes: `/api/v1/random/` and `/`. The `/api/v1/random/` 
route is an API used to retrieve random words and `/` will be where your react 
widget will be placed.

#### Random API (`/api/v1/random/`)

An API is provided to you that will generate random words. You can test this 
API by querying the API with httpie.

Start the app in one terminal:
```shellsession
$ cd $DEMO_ROOT
$ ./bin/randomsiterun
```

In another terminal query the API with `httpie`:
```shellsession
$ http "http://localhost:8000/api/v1/random/"
$ TODO add output
```

#### Random Widget (`/`) and React

The random widget will be placed on the main page at route `/`. We've already 
coded the route for the main page as well as the template used. See 
`randomsite/views/index.py` and `randomsite/templates/index.html` for more 
details.

Your job will be to complete the implementation of the random widget started
in `randomsite/js/randomwidget.jsx`. There are comments in the file with hints
regarding which order to implement. These comments also give hints about what 
each function should accomplish.

It's also worth studying how `randomsite/templates/index.html`, 
`randomsite/js/main.jsx`, `randomsite/js/randomwidget.jsx` interact with one 
another. Note that `randomsite/templates/index.html` references 
`randomsite/static/js/bundle.js` which is the compiled form of the react 
components in `randomsite/js/`.
