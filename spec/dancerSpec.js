describe('dancer', function() {
  var dancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    window.dancers = [];
    clock = sinon.useFakeTimers();
    dancer = new Dancer(new Point(20, 10), timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('isMoving', function() {
    it('should return false if object is not moving', function() {
      dancer.moveTo(new Point(20, 10));
      expect(dancer.isMoving()).to.equal(false);
    });

    it('should return true if object is moving horizontally', function() {
      dancer.moveTo(new Point(100, 0));
      expect(dancer.isMoving()).to.equal(true);
    });

    it('should return true if object is moving vertically', function() {
      dancer.moveTo(new Point(0, -100));
      expect(dancer.isMoving()).to.equal(true);
    });
  });

  describe('step', function() {
    it('should move forward', function() {
      var dest = new Point(75, 100);
      dancer.moveTo(dest);
      clock.tick(timeBetweenSteps * 5);
      expect(dancer.pos).to.eql(dest);
    });

    it('should move backward', function() {
      var dest = new Point(-75, -100);
      dancer.moveTo(dest);
      clock.tick(timeBetweenSteps * 5);
      expect(dancer.pos).to.eql(dest);
    });

    it('should move gradually', function() {
      var dest = new Point(75, 100);
      dancer.moveTo(dest);
      clock.tick(timeBetweenSteps * 2);
      expect(dancer.pos).to.not.eql(dest);
    });

    it('should move trigonometrically', function() {
      var dancers = [
        new Dancer(new Point(0, 0), timeBetweenSteps),
        new Dancer(new Point(0, 0), timeBetweenSteps),
        new Dancer(new Point(0, 0), timeBetweenSteps),
      ];
      dancers[0].moveTo(dancer.pos.diff(new Point(0, 500)));
      dancers[1].moveTo(dancer.pos.diff(new Point(-500, 0)));
      dancers[2].moveTo(dancer.pos.diff(new Point(500, 500)));
      clock.tick(timeBetweenSteps * 2);
      var dists = dancers.map(dancer => dancer.pos.magnitude());
      var gap = (dists[0] - dists[1] | 0) + (dists[1] - dists[2] | 0);
      expect(gap | 0).to.equal(0);
    });

    it('should not overshoot its destination', function() {
      var dest = new Point(25, 10);
      dancer.moveTo(dest);
      clock.tick(timeBetweenSteps * 2);
      expect(dancer.pos).to.eql(dest);
    });
  });
});
