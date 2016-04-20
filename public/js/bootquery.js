var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '), //define css junk
  prop,
  el = document.createElement('div');

for (var i = 0, l = props.length; i < l; i++) {
  if (typeof el.style[props[i]] !== "undefined") {
    prop = props[i];
    break;
  }
}

var xAngle = 0,
  yAngle = 0;
$('body').keydown(function(evt) {
  switch (evt.keyCode) {
    case 37: //THIS IS LEFT
      yAngle -= 90;
      break;

    case 38: //THIS IS UP
      xAngle += 90;
      evt.preventDefault();
      break;

    case 39: //THIS IS RIGHT
      yAngle += 90;
      break;

    case 40: //THIS IS DOWN...
      xAngle -= 90;
      evt.preventDefault();
      break;
  }
  document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
});
