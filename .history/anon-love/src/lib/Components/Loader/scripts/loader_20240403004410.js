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
        if([30, 70, 100].includes(currentProgress)) {
        progressBars.forEach((progressBar, index) => {
            let relativeWidth;
            let transitionDuration;
            if (index === 1) {
                relativeWidth = `${100 - currentProgress}vw`;
            } else {
                relativeWidth = `${currentProgress / 2}vw`;
            }
            if (currentProgress === 30) {
                transitionDuration = '.3s';
            } else {
                transitionDuration = '.75s';
            }
            progressBar.style.width = relativeWidth;
            progressBar.style.transitionDuration = transitionDuration;
        });
    }
    }
}

export function destroyLoader() {
    const loader = document.querySelector('#loader');
    if (loader) {
        loader.style.animation = 'blur 1s forwards, fadeOut 2s forwards';
        // 强制浏览器重新计算样式，确保动画立即开始
        void loader.offsetWidth;
        loader.addEventListener('animationend', () => {
            loader.parentNode.removeChild(loader);
        });
        // 添加一个定时器作为备用，以确保加载器在一定时间后被销毁
        setTimeout(() => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 60000);  // 这里的时间应该稍微长于动画的总时间
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

//setTimeout(function() {
//    destroyLoader();
//}, 6500);