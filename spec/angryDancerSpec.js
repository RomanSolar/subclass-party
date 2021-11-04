describe('angryDancer', function() {
  var angryDancer, clock, mouseOverSpy;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    window.dancers = [];
    angryDancer = new AngryDancer(new Point(10, 20), timeBetweenSteps);
  });

  it('should become angry on mouseover', function() {
    expect(angryDancer.$node.hasClass('angry')).to.not.be.true;
    angryDancer.$node.mouseover();
    expect(angryDancer.$node.hasClass('angry')).to.be.true;
  });

  it('should stop being angry on mouseout', function() {
    angryDancer.$node.mouseover();
    angryDancer.$node.mouseout();
    expect(angryDancer.$node.hasClass('angry')).to.be.false;
  });
});
