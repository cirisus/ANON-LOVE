export function updateProgress(newProgress) {
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');

    if (progressBar && progressText) {
        progressBar.style.width = `${newProgress}%`;
        progressText.textContent = `${newProgress}%`;
    }
}

export function destroyLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateProgress(30);
});

window.addEventListener('load', function() {
    updateProgress(70);
    destroyLoader();
});

window.addEventListener('beforeunload', function() {
    updateProgress(100);
});

setTimeout(function() {
    updateProgress(100);
    destroyLoader();
}, 2500);