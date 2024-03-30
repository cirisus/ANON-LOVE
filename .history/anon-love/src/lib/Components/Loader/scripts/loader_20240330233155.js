export function updateProgress(newProgress, callback) {
    const progressBars = document.querySelectorAll('.progress-bar');
    const progressText = document.querySelector('.progress-text');

    if (progressBars.length && progressText) {
        let currentProgress = parseInt(progressText.textContent);
        let interval = setInterval(() => {
            if (currentProgress < newProgress) {
                currentProgress++;
                progressBars.forEach(progressBar => {
                    progressBar.style.transform = `scaleX(${currentProgress / 100})`;
                });
                progressText.textContent = `${currentProgress}%`;
                callback && callback(currentProgress);
            } else {
                clearInterval(interval);
                if (newProgress === 30 || newProgress === 70) {
                    setTimeout(() => {
                        const nextProgress = Math.min(newProgress + 30, 100);
                        updateProgress(nextProgress, callback);
                    }, 800);
                } else if (newProgress === 100) {
                    callback && callback(currentProgress);
                }
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