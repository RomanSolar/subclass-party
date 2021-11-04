describe('Point', function() {
  describe('isEqual', function() {
    it('returns true if two points are equal', function() {
      var point1 = new Point(50, 80);
      var point2 = new Point(50, 80);
      expect(point1.isEqual(point2)).to.equal(true);
    });

    it('returns false if two points are not equal', function() {
      var point1 = new Point(50, 80);
      var point2 = new Point(51, 80);
      expect(point1.isEqual(point2)).to.equal(false);
    });
  });

  describe('isZero', function() {
    it('returns true if both coordinates are 0', function() {
      expect(new Point(0, 0).isZero()).to.equal(true);
    });

    it('returns false if either coordinate is not 0', function() {
      expect(new Point(0.1, 0).isZero()).to.equal(false);
      expect(new Point(0, -0.1).isZero()).to.equal(false);
    });
  });

  describe('clone', function() {
    it('returns a duplicate of the object', function() {
      var point1 = new Point(100, -100);
      expect(point1.clone()).to.eql(point1);
    });

    it('does not modify the original object', function() {
      var point1 = new Point(100, -100);
      var point2 = point1.clone();
      point2.x = 50;
      expect(point1.x).to.equal(100);
    });
  });

  describe('diff', function() {
    it ('returns the difference between two points', function() {
      var point1 = new Point(100, -100);
      var point2 = new Point(50, 75);
      var diff = point1.diff(point2);
      expect(diff.x).to.equal(point1.x - point2.x);
      expect(diff.y).to.equal(point1.y - point2.y);
    });
  });

  describe('map', function() {
    it ('returns a new point that maps a callback to both coordinates', function() {
      var point1 = new Point(100, -100);
      var point2 = point1.map(coord => coord + 1);
      expect(point2.x).to.equal(101);
      expect(point2.y).to.equal(-99);
    });

    it ('does not modify the original object', function() {
      var point1 = new Point(100, -100);
      var point2 = point1.map(coord => coord + 1);
      expect(point1.x).to.equal(100);
      expect(point1.y).to.equal(-100);
    });
  });

  describe('magnitude', function() {
    it('returns the vector magnitude of the point', function() {
      expect(new Point(-3, -4).magnitude()).to.equal(5);
    });
  });

  describe('normalize', function() {
    it('returns a vector with a different magnitude', function() {
      expect(new Point(10, 11).normalize(3).magnitude()).to.equal(3);
    });

    it('returns a vector with the same angle', function() {
      var point1 = new Point(10, 32);
      var point2 = point1.normalize(3);
      var diff = (point1.y / point1.x) - (point2.y / point2.x);
      expect(Math.abs(diff)).to.be.below(1);
    });

    it ('does not modify the original object', function() {
      var point1 = new Point(10, -32);
      var point2 = point1.normalize(3);
      expect(point1.x).to.equal(10);
      expect(point1.y).to.equal(-32);
    });
  });

  describe('randomOnScreen', function() {
    it('generates a random point', function() {
      var point1 = Point.randomOnScreen();
      var point2 = Point.randomOnScreen();
      expect(point1.x).to.not.equal(point2.x);
      expect(point1.y).to.not.equal(point2.y);
    });
  });
});
