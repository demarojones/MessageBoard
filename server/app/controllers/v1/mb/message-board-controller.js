
function MessageBoardController() {
}

var sampleMessages = [
  {text: 'Welcome to Msg Board', user: 'Tim Howard'},
  {text: 'Thank You', user: 'Lionel Messi'},
  {text: 'What do I do now!?', user: 'Raheem Sterling'},
  {text: 'You can look around', user: 'Jesse Linguard'},
  {text: 'At What?', user: 'Tim Howard'},
  {text: 'Welcome to Msg Board', user: 'Ham Stam'}
];

function get(req, res, next) {

  res.status(200).json(sampleMessages);
}

MessageBoardController.prototype = {
  get: get
};

var messageBoardController = new MessageBoardController();

module.exports = messageBoardController;
