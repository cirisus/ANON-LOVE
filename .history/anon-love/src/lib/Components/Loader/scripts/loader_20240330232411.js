export function updateProgress(newProgress, callback) {
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');

    if (progressBar && progressText) {
        let currentProgress = parseInt(progressText.textContent);
        let interval = setInterval(() => {
            if (currentProgress < newProgress) {
                currentProgress++;
                progressBar.forEach(progressBar => {
                    progressBar.style.transform = `scaleX(${currentProgress / 100})`;
                });
                progressText.textContent = `${currentProgress}%`;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    if (newProgress < 100) {
                        const nextProgress = Math.min(newProgress + 30, 100);
                        updateProgress(nextProgress, callback);
                    } else {
                        callback && callback();
                    }
                }, 250);
            }
        }, 10);
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
}, 6000);