MOCHA_REPORTER = spec
UNIT_TESTS = $(shell find test/ -name "*.test.js")


run:
	clear
	@NODE_ENV=development node server.js

spec:
	clear
	#@NODE_ENV=test sequelize -m
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require should \
		--require sinon \
		--globals prop \
		--reporter $(MOCHA_REPORTER) \
		--slow 50 \
		--growl \
		$(UNIT_TESTS)


.PHONY: spec
