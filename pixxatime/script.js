$(document).ready(function() {
  $("#bookingButton").click(function() {
    $("#map").toggle();
    $("#bookingButton").html("Great!")
  });
});

$(function() {
  $(document).scroll(function() {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

