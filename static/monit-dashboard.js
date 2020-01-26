var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  }
}

function draw(rate) {
  var count = [rate['green'], rate['red']];
  var percentage = [
    (count[0] * 100) / (count[0] + count[1]),
    (count[1] * 100) / (count[0] + count[1])
  ]
  var status = ['Ok', 'Error'];
  var green = (percentage[0] * 2) / 100;
  var red = (percentage[1] * 2) / 100;
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var colors = ['#00a90e', '#ff9a02'];
  var angles = [Math.PI * green, Math.PI * red];
  var offset = 0;
  var beginAngle = 0;
  var endAngle = 0;
  var offsetX, offsetY, medianAngle;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < angles.length; i = i + 1) {
    beginAngle = endAngle;
    endAngle = endAngle + angles[i];
    medianAngle = (endAngle + beginAngle) / 2;
    offsetX = Math.cos(medianAngle) * offset;
    offsetY = Math.sin(medianAngle) * offset;

    ctx.beginPath();

    if (percentage[i] !== 0) {
      ctx.fillStyle = colors[i % colors.length];
      ctx.moveTo(200 + offsetX, 200 + offsetY);
      ctx.arc(200 + offsetX, 200 + offsetY, 120, beginAngle, endAngle);
      ctx.lineTo(200 + offsetX, 200 + offsetY);
      // ctx.stroke();
      ctx.fill();

      ctx.rect(canvas.width - 129, i * 20 + 10, 10, 10);
      ctx.fill();
      ctx.font = "13px sans-serif";
      //ctx.font = "20px Georgia";
      ctx.fillText(status[i] + " - " + count[i] + " (" +
        Number(percentage[i]).toFixed(1) + "%)",
        canvas.width - 109, i * 20 + 20);
    }
  }
}
