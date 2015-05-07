BIN = ./node_modules/.bin

.PHONY: bootstrap release;

bootstrap: package.json
	@npm install

publish:
	@git push origin master && git push origin --tags
	@npm publish