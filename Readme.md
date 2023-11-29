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

## Notes

To use dashboard, go to `http://localhost:15672/` and use `guest` as credentials to login

## Useful links

### Rabbitmq tutorials

- https://www.rabbitmq.com/getstarted.html
