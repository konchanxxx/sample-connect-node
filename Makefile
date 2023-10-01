.PHONY: gen
gen:
	npx buf generate proto

.PHONY: up
up:
	npx tsx server.ts
