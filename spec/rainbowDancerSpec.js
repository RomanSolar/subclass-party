describe('rainbowDancer', function() {
  var dancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    window.dancers = [];
    clock = sinon.useFakeTimers();
    dancer = new RainbowDancer(new Point(10, 20), timeBetweenSteps);
  });

  it('cycles repeatedly through hues', function() {
    var oldHue;
    for (var i = 0; i < 10; i++) {
      clock.tick(timeBetweenSteps);
      expect(dancer.hue).to.not.equal(oldHue);
      oldHue = dancer.hue;
    }
  });
});
