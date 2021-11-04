var ButterflyDancer = function(pos, timeBetweenSteps) {
  Dancer.call(this, pos, timeBetweenSteps);
  this.$node.append('<img class="wings" src="/assets/img/wings.gif" height="100px"/>');
};

ButterflyDancer.prototype = Object.create(Dancer.prototype);
ButterflyDancer.constructor = ButterflyDancer;
ButterflyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if (!this.isMoving() && !this.inFormation) {
    var dancers = window.dancers.filter(x => !x.isMoving() && !this.pos.isEqual(x.pos));
    if (dancers.length > 0) {
      var target = dancers[Math.random() * dancers.length | 0];
      this.moveTo(target.pos);
    }
  }
};
