.EXPORT_ALL_VARIABLES:
.PHONY: test 

test:
	clj -A:test:runner

repl:
	rm -rf .cpcache/ && clj  -A:dev:test:nrepl
