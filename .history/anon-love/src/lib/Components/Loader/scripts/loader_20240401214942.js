export function updateProgress(newProgress, callback) {
    const progressBars = document.querySelectorAll('.progress-bar');
    const progressText = document.querySelector('.progress-text');

    if (!progressBars.length || !progressText) {
        return;
    }

    let currentProgress = parseInt(progressText.textContent);
    let startTime = null;

    function incrementProgress(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        const elapsed = timestamp - startTime;

        if (elapsed > (currentProgress < 30 ? 10 : 7)) {
            if (currentProgress >= newProgress) {
                if (newProgress === 100) {
                    callback && callback(currentProgress);
                }
                return;
            }
            if (currentProgress === 30 || currentProgress === 70) {
                setTimeout(() => {
                    requestAnimationFrame(incrementProgress);
                }, currentProgress === 30 ? 300 : 200);
                return;
            }
            currentProgress++;
            progressText.textContent = `${currentProgress}%`;
            progressBars.forEach((progressBar, index) => {
                let relativeWidth;
                if (index === 1) {
                    relativeWidth = `${100 - currentProgress}vw`;
                } else {
                    relativeWidth = `${currentProgress / 2}vw`;
                }
                progressBar.style.width = relativeWidth;
            });
            startTime = timestamp;
        }
        requestAnimationFrame(incrementProgress);
    }
    requestAnimationFrame(incrementProgress);
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