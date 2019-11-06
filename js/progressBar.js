let i1 = 0;
let i2 = 0;
let i3 = 0;

function init() {
  $("#code").click(function () {
    if (i1 < 100) {
      i1 = i1 + 1;
      $(".bar1").css("width", i1 + "%").text(i1 + " %");
    }
  });

  $("#code2").click(function () {
    if (i2 < 100) {
      i2 = i2 + 3;
      if (i2 > 100) i2 = 100;
      $(".bar2").css("width", i2 + "%").text(i2 + " %");
    }
  });

  $("#code3").click(function () {
    if (i3 < 100) {
      i3 = i3 + 7;
      if (i3 > 100) i3 = 100;
      $(".bar3").css("width", i3 + "%").text(i3 + " %");
    }
  });
}
$(document).ready(init);

