# Node app with Rabbitmq

#### Rabbitmq Learning Project

## Download & Installation

```
docker run -d -it --rm --net rabbitmq_net --hostname rabbit-1 --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.12-management
```

## Install rabbitmq package for node

```
npm install amqplib
```

## How to run HelloWorld

run the following command in docker console

```
node send.js
```

```
node receive.js
```

## Notes

To use dashboard, go to `http://localhost:15672/` and use `guest` as credentials to login

## Useful links

### Rabbitmq tutorials

- https://www.rabbitmq.com/getstarted.html

### Hello world tuto link

- https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html

### Useful Reference links

Note some tutos might not be in JS but the logic is all we need to learn

- https://www.youtube.com/watch?v=hfUIWe1tK8E
