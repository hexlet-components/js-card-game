install:
	npm install

lock:
	npm shrinkwrap

build:
	npm run build

test:
	npm run test

lint:
	npm run eslint .

.PHONY: test
