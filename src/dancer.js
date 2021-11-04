// Creates and returns a new dancer object that can step
var Dancer = function(pos, timeBetweenSteps) {
  this.baseSpeed = 50;

  this.$anim = $('<img src="/assets/img/Carlton.gif" class="dancerBody"/>');
  this.$node = $('<div class="dancer"></div>');
  this.$anim.appendTo(this.$node);

  this.inFormation = false;
  this.timeout = null;
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(pos);
  this.speed = new Point(0, 0);
  this.target = new Point(null, null);

  // use jQuery to create an HTML <span> tag

  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  window.dancers.push(this);
};

Dancer.prototype.isMoving = function() {
  return !this.speed.isZero();
};

Dancer.prototype.calculateMove = function(axis) {
  var pos = this.pos[axis];
  var speed = this.speed[axis];
  if (speed === 0) {
    return pos;
  }
  var target = this.target[axis];
  var dest = pos + speed;
  // target coordinate is in between current location and next location—don't overshoot!
  if (dest <= target === speed < 0) {
    this.speed[axis] = 0;
    return target;
  }
  return dest;
};

Dancer.prototype.step = function() {
  clearTimeout(this.timeout);
  this.timeout = setTimeout(this.step.bind(this), this.timeBetweenSteps);

  if (!this.isMoving()) {
    return;
  }

  this.setPosition(new Point(this.calculateMove('x'), this.calculateMove('y')));
};

Dancer.prototype.setPosition = function(pos) {
  this.pos = pos.clone();
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.$node.css({left: pos.x, top: pos.y});
};

Dancer.prototype.moveTo = function(target) {
  var speedBoost = this.inFormation ? 3 : 1;
  this.speed = target.diff(this.pos).normalize(this.baseSpeed * speedBoost);
  this.target = target.clone();
};
