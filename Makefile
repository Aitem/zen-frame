.EXPORT_ALL_VARIABLES:
.PHONY: test 

test:
	clojure -A:test:runner

repl:
	rm -rf .cpcache/ && clojure  -A:dev:test:nrepl
