console.log('Letter.js loaded');

// When the birdhouse is clicked, trigger the door opening and fade-out,
// then reveal the letter, button, and scattered images.
document.getElementById('birdhouse-container').addEventListener('click', function () {
    console.log('Birdhouse clicked');
    this.classList.add('open');
    document.body.classList.add('open');
});

// When the YES button is clicked, navigate to the restaurants page.
document.getElementById('yes-button').addEventListener('click', function (e) {
    console.log('YES button clicked');
    e.stopPropagation();
    window.location.href = 'Restaurant.html';
});
  