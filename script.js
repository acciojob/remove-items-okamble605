//your JS code here. If required.
document.querySelector('input[type="button"]').addEventListener('click', function() {
  const colorSelect = document.getElementById('colorSelect');
  
  // Get the selected option
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];
  
  // Remove the selected option
  if (selectedOption) {
    colorSelect.removeChild(selectedOption);
  }
});
