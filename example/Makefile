.EXPORT_ALL_VARIABLES:
.PHONY: test build ui-test

test:
	clojure -A:test:runner
repl:
	rm -rf .cpcache/ && clojure  -A:dev:test:nrepl

build:
	clojure -m build
	cp -r resources/public/* build
