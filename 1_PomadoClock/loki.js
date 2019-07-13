var num=5*60; //alltime min
var waterh=num;
function padLeft(str, lenght) { //補0
  str = String(str);
  if (str.length >= lenght) return str;
  else return padLeft("0" + str, lenght);
}
function gochg(){}

function runTime() { //減秒顯示
  if (num != 0) {
    num--;
    showsec = padLeft(num % 60, 2);
    showmin = padLeft(Math.floor(num / 60), 2);
    $("#clickdigi").text(`${showmin}:${showsec}`);
    pse = (1 - (num / waterh))*100;
    console.log(pse,num,waterh);
    $("#water").css({height:pse+"vh"});
  } else {
    clearInterval(time);
    gochg();
  }
}

$(document).ready(function() {
  var time = 0;
  $("#spause").hide();
  $("#splay").children("i").click(function() { //play action
    runTime();
    time = setInterval(runTime, 1000);
    $("#spause").toggle();
    $("#splay").toggle();
    $(".st6").css("fill","white");
    $(".st11").toggleClass("live");
  });

  $("#spause").children("i").click(function() { //pause action
    clearInterval(time);
    $("#spause").toggle();
    $("#splay").toggle();
    $(".st6").css("fill", "#f44336");
    $(".st11").toggleClass("live");
  });
});