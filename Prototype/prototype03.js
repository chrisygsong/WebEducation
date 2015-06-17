/**
 * Created by chris on 2015. 6. 11..
 */

  function btn_clickEvent() {
    var text = document.getElementById("inputbox").innerText;
    var output = document.getElementById("outbox").innerHTML = text;
  }

document.getElementById("e_btn1").onclick = function() {btn_clickEvent()}