let jumpCount = 0;

document.querySelector('.pokeball').addEventListener('animationiteration', function() {
  jumpCount++;
  if (jumpCount === 2) {
    this.classList.add('open');
    this.style.animation = 'none';
  }
});