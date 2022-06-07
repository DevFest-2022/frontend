all: build run

build:
	sudo docker build -t follownext-frontend .
	
run:
	docker run -v $(PWD):/app -v /app/node_modules -p 3000:3000 follownext-frontend

run-it:
	docker run -v $(PWD):/app -v /app/node_modules -p 3000:3000 -it --entrypoint /bin/bash follownext-frontend