var RainbowDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.hue = 0;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

RainbowDancer.prototype = Object.create(BlinkyDancer.prototype);
RainbowDancer.constructor = RainbowDancer;
RainbowDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  BlinkyDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$anim.css('filter', `hue-rotate(${this.hue}deg)`);
  this.hue = (this.hue + 20) % 360;
};
