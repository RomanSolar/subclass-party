describe('formations', function() {
  var clock;
  var timeBetweenSteps = 100;
  var partySize = 10;

  beforeEach(function() {
    window.dancers = [];
    clock = sinon.useFakeTimers();
    for (i = 0; i < partySize; i++) {
      new Dancer(Point.randomOnScreen(), timeBetweenSteps);
    }
  });

  it('should line up vertically', function() {
    lineup();
    clock.tick(50 * timeBetweenSteps);
    for (var dancer of window.dancers) {
      expect(dancer.pos.x).to.equal(20);
    }
  });

  it('should scatter randomly', function() {
    scatter();
    var xCoords = new Set(window.dancers.map(dancer => dancer.pos.x));
    var yCoords = new Set(window.dancers.map(dancer => dancer.pos.y));
    expect(xCoords.size).to.equal(partySize);
    expect(yCoords.size).to.equal(partySize);
  });

  it('should conga horizontally', function() {
    lineup();
    clock.tick(50 * timeBetweenSteps);
    for (var dancer of window.dancers) {
      expect(dancer.pos.x).to.equal(document.body.clientWidth / 2);
    }
  });
});
