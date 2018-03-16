
describe('MessageBoardController Tests', function() {

  var messageBoardController;
  var req;
  var res;
  var next;

  beforeEach(function() {
    req = {};
    res = { status: function(code) { return { json: function(obj) {} }} };

    sinon.spy(res, "status");

    messageBoardController = require('../../../../../app/controllers/v1/circus/message-board-controller');
  });

  describe('get()', function() {

    it('should be a function', function(done) {
      expect(messageBoardController.get).to.be.a('function');
      done();
    });

    it('should call res.status() one time', function(done) {
      messageBoardController.get(req, res, next);

      expect(res.status.callCount).to.equal(1);
      done();
    });

    it('should call res.status() with 200', function(done) {
        messageBoardController.get(req, res, next);

      expect(res.status.calledWith(200)).to.equal(true);
      done();
    });

  });
});
