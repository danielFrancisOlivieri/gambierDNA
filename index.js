'use strict';

const twilio = require('twilio');
const config = require('./config.json');
// require firebase
var admin = require('firebase-admin');

var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://stalgia-167017.firebaseio.com'
  });

// connect to firebase db
var ref = admin.database().ref('/');




const MessagingResponse = twilio.twiml.MessagingResponse;

const projectId = process.env.GCLOUD_PROJECT;
const region = 'us-central1';

exports.reply = (req, res) => {
  let isValid = true;

  // Only validate that requests came from Twilio when the function has been
  // deployed to production.
  if (process.env.NODE_ENV === 'production') {
    isValid = twilio.validateExpressRequest(req, config.TWILIO_AUTH_TOKEN, {
      url: `https://${region}-${projectId}.cloudfunctions.net/reply`
    });
  }

  // Halt early if the request was not sent from Twilio
  if (!isValid) {
    res
      .type('text/plain')
      .status(403)
      .send('Twilio Request Validation Failed.')
      .end();
    return;
  }

  // Prepare a response to the SMS message
  const response = new MessagingResponse();

  let userMessage = req.body.Body;

  if(userMessage.indexOf('INTERVIEW') != -1){
    response.message("Ready for your interview?");
  }
  else{
    var data = {
        text: req.body.Body,
        number: req.body.From    
    }
    
      ref.push(data);
      // Add text to the response
    
      response.message("Thank you for your message!");
  }


  // Send the response
  res
    .status(200)
    .type('text/xml')
    .end(response.toString());
};
