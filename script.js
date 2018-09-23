// play/pause video on mouse hover
$(document).ready(function () {
  $('.video')
    .on('mouseover', function (event) {
      this.play();
    })
    .on('mouseout', function (event) {
      this.pause();
    });
});

// scroll top top
$("a[href='#main']").click(function () {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});

// send form information using an AJAX request to formspree (which redirects to personal email)
var form = document.getElementById('main-form');

form.addEventListener('submit', function (event) {
  let name = form.name.value;
  let email = form.email.value;
  let message = form.message.value;

  if (!name || !email || !message) {
    alert('Please check your entries');
    event.preventDefault();
  } else {
    $.ajax({
      url: 'https://formspree.io/vladtrebukhov123@gmail.com',
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json'
    });
    alert('Thank you, your message has been sent.');
    form.reset();
  }
});
