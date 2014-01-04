
serve: node_modules
	@node_modules/serve/bin/serve -Slojp 0

test: node_modules
	@sed "s/'balance-svg-paths'/'.\/'/" Readme.md | node_modules/jsmd/bin/jsmd

node_modules: *.json
	@packin install \
		--meta package.json \
		--folder node_modules

.PHONY: serve test
