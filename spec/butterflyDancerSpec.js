describe('butterflyDancer', function() {
  var dancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    window.dancers = [];
    clock = sinon.useFakeTimers();
    dancer = new ButterflyDancer(new Point(10, 20), timeBetweenSteps);
  });

  it('moves toward a target', function() {
    var target = new Dancer(new Point(800, 800));
    clock.tick(50 * timeBetweenSteps);
    expect(dancer.pos).to.eql(target.pos);
  });

  it('moves gradually', function() {
    var target = new Dancer(new Point(800, 800));
    clock.tick(timeBetweenSteps);
    expect(dancer.pos).to.not.eql(target.pos);
  });

  it('does nothing if there is no available target', function() {
    new Dancer(dancer.pos);
    new Dancer(dancer.pos);
    expect(dancer.speed.isZero()).to.equal(true);
  });

  it('bounces from target to target', function() {
    var targets = [new Dancer(new Point(-50, -50)), new Dancer(new Point(100, 0))];

    for (var i = 0; i < 5; i++) {
      clock.tick(timeBetweenSteps);
      for (var target of targets) {
        if (dancer.target.isEqual(target.pos)) {
          target.tagged = true;
        }
      }
    }

    expect(targets.filter(target => !target.tagged).length).to.equal(0);
  });
});
