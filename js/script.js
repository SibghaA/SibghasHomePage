const img = document.querySelector('.profile-image'); // Replace with your image selector
img.addEventListener('click', function () {
  if (this.style.transform === 'rotate(180deg)') {
    this.style.transform = 'rotate(0deg)';
  } else {
    this.style.transform = 'rotate(180deg)';
  }
});
