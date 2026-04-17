const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('customEventName',(param1,param2)=>{

    console.log(`Printing log from custom Event and Param1 is :${param1} & Param2 is :${param2}`);

});

customEmitter.on('customEventName',()=>{

    console.log('Some Other logic on same event name');

});


customEmitter.emit('customEventName','Data one','Data two');
