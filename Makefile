.PHONY: gen
gen:
	npx buf generate proto

.PHONY: server/up
server/up:
	npx tsx server.ts

.PHONY: client/up
client/up:
	npx tsx client.ts
