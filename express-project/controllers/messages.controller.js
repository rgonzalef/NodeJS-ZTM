
function getMessages(req, res) {
    res.send('<h1>Hello Albert!!</h1>')
  }

function postMessages(req, res) {
    console.log('Updating messages...')
  }

module.exports = {
    getMessages,
    postMessages,
};