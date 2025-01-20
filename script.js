document.addEventListener('DOMContentLoaded', function () {
    // Delay before showing the button
    setTimeout(function () {
      document.getElementById('showButton').classList.remove('hidden');
    }, 3000); // 3 seconds delay before showing the button
  
    document.getElementById('showButton').addEventListener('click', function () {
      // Show the hidden support message and image
      document.getElementById('supportMessage').classList.remove('hidden');
      document.getElementById('supportImage').classList.remove('hidden');
      
      // Hide the button after click
      document.getElementById('showButton').classList.add('hidden');
    });
  });
  