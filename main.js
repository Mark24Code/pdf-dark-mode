const viewerEl = document.getElementById("viewer");
const styleBackup = viewerEl.style;

viewerEl.style = 'filter: grayscale(1) invert(1) sepia(1)';

console.log('pdf dark mode ready')
// document.getElementById("viewer").style = 'filter: grayscale(1) invert(1) sepia(1)';