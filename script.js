// play/pause video on mouse hover
$(document).ready(function () {
  $('.video').on('mouseover', function (event) {
    this.play();
  }).on('mouseout', function (event) {
    this.pause();
  });
})
