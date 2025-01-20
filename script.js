document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      document.getElementById('showButton').classList.remove('hidden');
    }, 3000); // Delay before showing the button
  });
  
  document.getElementById('showButton').addEventListener('click', function () {
    document.getElementById('supportMessage').classList.remove('hidden');
    document.getElementById('showButton').classList.add('hidden'); // Hide button after click
  });
  