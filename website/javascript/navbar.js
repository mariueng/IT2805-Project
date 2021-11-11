/* Source code: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("myBtn").style.display ="none";
  } else {
    document.getElementById("navbar").style.top = "-80px";
    document.getElementById("myBtn").style.display ="block";
    
  }
  prevScrollpos = currentScrollPos;
}