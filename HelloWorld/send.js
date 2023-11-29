var amqp = require('amqplib/callback_api');

// amqp.connect("amqp://" + rabbit_user + ":" +rabbit_password + "@" + rabbit_host + ":" + rabbit_port +"/")
amqp.connect('amqp://rabbit-1', function(error0, connection) {
  if (error0) {
    throw error0
  }
  console.log('connected to the hole..')
  return
});