import zmq from 'zeromq';

const subscriber = ({ports = [60400]}) => {

  // Create subscriber endpoint.
  const subscriber = zmq.socket('sub'); // Subscribe to all messages.
  subscriber.subscribe('');

  // Handle messages from the publisher.
  subscriber.on('message', data => {
    const message = JSON.parse(data);
    console.log(`Port ${message.port} Message ${message.file}`);
  });

  // Connect to publisher.
  ports.map(port => subscriber.connect(`tcp://localhost:${port}`));

  // Listen on TCP port 60400.
  /*
  subscriber.bind(`tcp://*:${port}`, err => {
    if (err) {
      throw err;
    }
    console.log('Listening for zmq subscribers...');
  });
  */
};

export default subscriber;
