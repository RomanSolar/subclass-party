var Point = function(x, y) {
  this.x = x;
  this.y = y;
};

Point.prototype.isEqual = function(other) {
  return this.x === other.x && this.y === other.y;
};

Point.prototype.isZero = function() {
  return this.x === 0 && this.y === 0;
};

Point.prototype.clone = function() {
  return new Point(this.x, this.y);
};

Point.prototype.diff = function(other) {
  return new Point(this.x - other.x, this.y - other.y);
};

Point.prototype.map = function(fn) {
  return new Point(fn(this.x), fn(this.y));
};

Point.prototype.magnitude = function(fn) {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};

Point.prototype.normalize = function(magnitude) {
  if (this.isZero()) {
    return new Point(0, 0);
  }
  var oldMagnitude = this.magnitude();
  return this.map(coord => magnitude * coord / oldMagnitude);
};

Point.randomOnScreen = function() {
  return new Point(
    (document.body.clientWidth - 141) * Math.random(),
    (document.body.clientHeight - 200) * Math.random()
  );
};
