const path = require('path');


function getMessages(req, res) {
    //res.send('<h1>Hello Albert!!</h1>')
    res.sendFile(path.join(__dirname, '..', 'public', 'code.png'))
  }

function postMessages(req, res) {
    console.log('Updating messages...')
  }

module.exports = {
    getMessages,
    postMessages,
};