var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

function draw(rate) {
  console.log(rate)
  var green = (rate['green']*2)/100;
  var red = (rate['red']*2)/100;
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var colors = ['#40ff00', '#ff0000'];
  var angles = [Math.PI * green, Math.PI * red];
  var offset = 0;
  var beginAngle = 0;
  var endAngle = 0;
  var offsetX, offsetY, medianAngle;

  for(var i = 0; i < angles.length; i = i + 1) {
    beginAngle = endAngle;
    endAngle = endAngle + angles[i];
    medianAngle = (endAngle + beginAngle) / 2;
    offsetX = Math.cos(medianAngle) * offset;
    offsetY = Math.sin(medianAngle) * offset;
    ctx.beginPath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.moveTo(200 + offsetX, 200 + offsetY);
    ctx.arc(200 + offsetX, 200 + offsetY, 120, beginAngle, endAngle);
    ctx.lineTo(200 + offsetX, 200 + offsetY);
    ctx.stroke();
    ctx.fill();
  }
}
