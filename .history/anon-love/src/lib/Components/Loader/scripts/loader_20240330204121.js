export function updateProgress(newProgress, callback) {
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');

    if (progressBar && progressText) {
        let currentProgress = parseInt(progressText.textContent);
        let interval = setInterval(() => {
            if (currentProgress < newProgress) {
                currentProgress++;
                progressBar.style.width = `${currentProgress}%`;
                progressText.textContent = `${currentProgress}%`;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    if (newProgress < 100) {
                        updateProgress(newProgress + 111, callback);
                    } else {
                        callback && callback();
                    }
                }, 150);
            }
        }, 5);
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
});
window.addEventListener('beforeunload', function() {
    updateProgress(100,destroyLoader);
});

setTimeout(function() {
    destroyLoader();
}, 8000);