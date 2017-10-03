#!/bin/bash

apt-get install python3-venv -y
cd /vagrant
python3 -m venv env
source env/bin/activate
pip install nodeenv
nodeenv --python-virtualenv
source env/bin/activate  # again, after installing node
pip install -e .
npm install .
