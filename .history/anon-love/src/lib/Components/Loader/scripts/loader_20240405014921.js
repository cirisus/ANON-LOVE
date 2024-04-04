export function updateProgress(newProgress, callback) {
    const progressBars = document.querySelectorAll('.progress-bar');
    const progressText = document.querySelector('.progress-percentage');

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
        progressText.textContent = `${currentProgress}`;
        if([30, 70, 100].includes(currentProgress)) {
        progressBars.forEach((progressBar, index) => {
            let relativeWidth;
            let transitionDuration;
            if (index === 1) {
                relativeWidth = `${100 - currentProgress}vw`;
            } else {
                relativeWidth = `${currentProgress / 2 + 1}vw`;
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
        const descendants = loader.querySelectorAll('*');
        const allAnimations = Array.from(descendants).flatMap(descendant => descendant.getAnimations());
        Promise.all(allAnimations.map(animation => animation.finished)).then(() => {
            const fadeOutAnimation = loader.animate([
                { opacity: 1, backdropFilter: 'blur(1rem)'},
                { opacity: 0, backdropFilter: 'blur(0)'}
            ], {
                duration: 4500,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                fill: 'forwards'
            });
            const tipOrigin = document.querySelector('.tip-origin');
            const tipAlt = document.querySelector('.tip-alt');
            const sweepLine = document.querySelector('.sweep-line');
            if (tipOrigin) {
                tipOrigin.style.clipPath = 'polygon(calc(-70 / 1.73205)% 0,0 0,calc(-70 / 1.73205)% 70%,calc(-70 / 1.73205)% 70%)';
            }
            if (tipAlt) {
                tipAlt.style.clipPath = 'polygon(calc(-70 / 1.73205)% 0,calc(100 + 70 / 1.73205)% 0,100% 70%,calc(-70 / 1.73205)% 70%)';
            }
            if (sweepLine) {
                sweepLine.style.left = '103%';
            }
            fadeOutAnimation.finished.then(() => {
                loader.remove();
            });
        });
    }
}
document.addEventListener('DOMContentLoaded', function() {
    updateProgress(30);
});

window.addEventListener('load', function() {
    updateProgress(70);
});
window.addEventListener('beforeunload', function() {
    updateProgress(100);
});