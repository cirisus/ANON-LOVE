export function updateProgress(newProgress, callback) {
    const progressBars = document.querySelectorAll('.progress-bar');
    const progressText = document.querySelector('.progress-text');

    if (!progressBars.length || !progressText) {
        return;
    }

    let currentProgress = parseFloat(progressText.textContent);
    let increment = 0.1; //incre-granularity
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
        currentProgress += increment;
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
    }
}