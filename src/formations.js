var sortDancers = function(axis) {
  var sortedDancers = window.dancers.slice();
  sortedDancers.sort(function(dancerA, dancerB) {
    return dancerA.pos[axis] - dancerB.pos[axis];
  });
  return sortedDancers;
};

var lineup = function() {
  if (window.dancers.length === 0) {
    return;
  }
  if (window.dancers.length === 1) {
    dancer[0].inFormation = true;
    dancer.moveTo(new Point(20, document.body.clientHeight / 2));
    return;
  }
  var sortedDancers = sortDancers('y');
  var dest = new Point(20, 32);
  var spacing = (document.body.clientHeight - 40 - 200) / (sortedDancers.length - 1);
  for (var dancer of sortedDancers) {
    dancer.inFormation = true;
    dancer.moveTo(dest);
    dest.y += spacing;
  }
};

var scatter = function() {
  for (var dancer of window.dancers) {
    dancer.inFormation = false;
    dancer.moveTo(Point.randomOnScreen());
  }
};

var conga = function() {
  if (window.dancers.length === 0) {
    return;
  }
  if (window.dancers.length === 1) {
    dancer[0].inFormation = true;
    dancer.moveTo(new Point(document.body.clientWidth / 2), document.body.clientHeight / 2);
    return;
  }
  var sortedDancers = sortDancers('x');
  var spacing = (document.body.clientWidth - 141) / (sortedDancers.length - 1);

  /*
      |x  x  x  x  x|   5 dancers
        -- -- -- --     4 spaces
      [             ]   total width of screen
  */
  var dest = new Point(0, document.body.clientHeight / 2);

  for (var dancer of sortedDancers) {
    dancer.inFormation = true;
    dancer.moveTo(dest);
    dest.x += spacing;
  }
};
