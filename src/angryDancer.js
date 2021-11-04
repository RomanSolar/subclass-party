var AngryDancer = function(pos, timeBetweenSteps) {
  Dancer.call(this, pos, timeBetweenSteps);

  this.$node.on('mouseover', function() { $(this).addClass('angry'); });

  this.$node.on('mouseout', function() { $(this).removeClass('angry'); } );
};

AngryDancer.prototype = Object.create(Dancer.prototype);
AngryDancer.constructor = AngryDancer;
