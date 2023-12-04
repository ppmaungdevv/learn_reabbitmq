/* 
* this file will create a new queue and send to rabbitmq
*/

var amqp = require('amqplib/callback_api');

// create a connection
// amqp.connect("amqp://" + rabbit_user + ":" +rabbit_password + "@" + rabbit_host + ":" + rabbit_port +"/")
amqp.connect('amqp://rabbit-1', function(error0, connection) {
  if (error0) {
    throw error0
  }
  console.log('connected to the hole..')
  
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1
    }
    console.log('channel created...')

    let exchange = 'logs', msg = process.argv.slice(2).join(' ') || 'Hello World!'

    channel.assertExchange(exchange, 'fanout', {
      durable: false
    })

    // publish exchange
    channel.publish(exchange, '', Buffer.from(msg))



    console.log(" [x] Sent %s", msg)
  });

  // close connection
  setTimeout(function() {
    connection.close();
    process.exit(0)
    }, 500);
});