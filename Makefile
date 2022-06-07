all: build run

build:
	sudo docker build -t follownext-frontend .
	
run:
	docker run -v $(PWD):/app -v /app/node_modules follownext-frontend

run-it:
	docker run -v $(PWD):/app -v /app/node_modules -it --entrypoint /bin/bash follownext-frontend