.PHONY: run
run:
	yarn run dev

.PHONY: build
build: src package.json
	yarn run build

# Do this before https://vitejs.dev/guide/static-deploy.html#google-firebase
.PHONY: deploy
deploy: build
	firebase deploy

.PHONY: preview
preview:
	yarn run preview

.PHONY: fireemulate
emulate:
	firebase emulators:start

.PHONY: firechannel
channel:
	firebase hosting:channel:deploy -e 1d bohitaapidev
