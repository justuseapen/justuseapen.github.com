var e = document.getElementById('pavlok');
e.onmouseover = function() {
  document.getElementById('popup').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup').style.display = 'none';
}

$(".popout").mouseover(function() {
    $(this).children(".box").show();
}).mouseout(function() {
    $(this).children(".box").hide();
});