export function updateProgress(newProgress) {
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');

    if (progressBar && progressText) {
        progressBar.style.width = `${newProgress}%`;
        progressText.textContent = `${newProgress}%`;

        if (newProgress === 100) {
          destroyLoader();
        }
      }
    }

document.addEventListener('DOMContentLoaded', function() {
    updateProgress(10);
});

window.addEventListener('load', function() {
    updateProgress(60);
});

window.addEventListener('beforeunload', function() {
    updateProgress(90);
});

window.addEventListener('unload', function() {
    updateProgress(100);
});

setTimeout(function() {
    updateProgress(100);
}, 3000);