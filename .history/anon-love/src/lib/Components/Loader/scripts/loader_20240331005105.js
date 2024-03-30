export function updateProgress(newProgress, callback) {
    const progressBars = document.querySelectorAll('.progress-bar');
    const progressText = document.querySelector('.progress-text');

    if (!progressBars.length || !progressText) {
        return;
    }

    let currentProgress = parseInt(progressText.textContent);
    let interval = setInterval(() => {
        if (currentProgress > newProgress) {
            clearInterval(interval);
            if (newProgress === 100) {
                callback && callback(currentProgress);
            }
            return;
        }
        if (currentProgress === 30 || currentProgress === 70) {
            clearInterval(interval);
            setTimeout(() => {
                interval = setInterval(incrementProgress, currentProgress < 30 ? 10 : 7);
            }, currentProgress === 30 ? 300 : 200);
            return;
        }
        incrementProgress();
    }, currentProgress < 30 ? 10 : 7);

    function incrementProgress() {
        if (currentProgress >= 100) {
            return;
        }
        currentProgress++;
        progressText.textContent = `${currentProgress}%`;
        progressBars.forEach((progressBar, index) => {
            let clipPath;
            if (index === 0) {
                clipPath = `polygon(0 0, ${currentProgress}% 0, ${currentProgress}% 100%, 0 100%)`;
            } else {
                clipPath = `polygon(${100 - currentProgress}% 0, 100% 0, 100% 100%, ${100 - currentProgress}% 100%)`;
            }
            progressBar.style.clipPath = clipPath;
            progressBar.style.webkitClipPath = clipPath;
            progressBar.style.setProperty('--shadow-width', `${currentProgress}%`);
        });
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
}, 3000);