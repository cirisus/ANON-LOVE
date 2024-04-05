export function updateProgress(newProgress, callback) {
    const progressBars = document.querySelectorAll('.progress-bar');
    const progressText = document.querySelector('.progress-text');

    if (!progressBars.length || !progressText) {
        return;
    }

    let currentProgress = newProgress;
    progressText.textContent = `${Math.round(currentProgress)}%`;
    progressBars.forEach((progressBar, index) => {
        let relativeWidth;
        if (index === 1) {
            relativeWidth = `${100 - Math.round(currentProgress)}vw`;
        } else {
            relativeWidth = `${Math.round(currentProgress / 2)}vw`;
        }
        progressBar.style.width = relativeWidth;
    });

    if (newProgress === 100) {
        callback && callback(currentProgress);
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
}, 2000);