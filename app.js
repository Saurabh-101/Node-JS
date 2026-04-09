const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('customEventName',()=>{

    console.log('Printing log from custom Event');

});

customEmitter.emit('customEventName');
