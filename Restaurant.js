// Add click events to each restaurant element.
document.querySelectorAll('.restaurant').forEach(function(restaurant) {
    restaurant.addEventListener('click', function() {
      // Add the 'selected' class to the clicked restaurant to center and enlarge it.
      this.classList.add('selected');
      
      // Fade out the header.
      document.getElementById('header').classList.add('fade');
      
      // Fade out all other restaurants.
      document.querySelectorAll('.restaurant').forEach(function(r) {
        if (r !== restaurant) {
          r.classList.add('fade');
        }
      });
      
      // After a short delay, display the final message.
      setTimeout(function() {
        var finalMessage = document.getElementById('final-message');
        finalMessage.style.display = 'block';
        // Force reflow to trigger the transition.
        void finalMessage.offsetWidth;
        finalMessage.classList.add('show');
      }, 500);
    });
  });
  