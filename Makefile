build:
	cd src && make build
	./tasks zip

deploy:
	./tasks deploy
