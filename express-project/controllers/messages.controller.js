const path = require('path');


function getMessages(req, res) {
    //res.send('<h1>Hello Albert!!</h1>')
    //res.sendFile(path.join(__dirname, '..', 'public','images', 'code.png'))
    res.render('messages', {
      title: "Messages to my Friends!",
      friend: 'Elon Musk'
    })
  }

function postMessages(req, res) {
    console.log('Updating messages...')
  }

module.exports = {
    getMessages,
    postMessages,
};