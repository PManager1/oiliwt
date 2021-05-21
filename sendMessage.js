var twilio = require('twilio');


var accountSid = 'AC584e5f30a89554f072eed2bacddbe983'; // Your Account SID from www.twilio.com/console
var authToken = '4b0784e720bfeffc311b4524923e571e';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+17146067884',  // Text this number
    from: '+12345678901' // From a valid Twilio number
})
.then((message) => console.log(message.sid));