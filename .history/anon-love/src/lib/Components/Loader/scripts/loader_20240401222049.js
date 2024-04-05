function updateProgress(newProgress, callback) {
    const progressBars = document.querySelectorAll('.progress-bar');
    const progressText = document.querySelector('.progress-text');

    if (!progressBars.length || !progressText) {
        return;
    }

    let currentProgress = newProgress;
    while(currentProgress === 30 || currentProgress === 70) {
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
    if (newProgress === 100) {
        callback && callback(currentProgress);
    }
}
}
function destroyLoader() {
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

export { updateProgress, destroyLoader };