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
    let isDestroying = false;
    if (isDestroying) {
        return;
    }
    isDestroying = true;

    const loader = document.querySelector('#loader');
    const descendants = loader.querySelectorAll('*');
    const allAnimations = Array.from(descendants).flatMap(descendant => descendant.getAnimations());
    Promise.all(allAnimations.map(animation => animation.finished))
    .then(() => {
        const fadeOutAnimation = loader.animate([
            { opacity: 1, backdropFilter: 'blur(1rem) brightness(1.15) saturate(0.5)', filter: 'blur(0)', transform: 'scale(1)'},
            { opacity: 0.85, backdropFilter: 'blur(0.5rem) brightness(1.05) saturate(0.8)', filter: 'blur(0)', transform: 'scale(1)' },
            { opacity: 0, backdropFilter: 'blur(0) brightness(1) saturate(1)', filter: 'blur(3rem)', transform: 'scale(2)'}
        ], {
            duration: 2000,
            easing: 'cubic-bezier(0.4, 0, 0.6, 1)',
            fill: 'forwards'
        });
        const tipOrigin = document.querySelector('.tip-origin');
        const tipAlt = document.querySelector('.tip-alt');
        const sweepLine = document.querySelector('.sweep-line');
        if (tipOrigin) {
            tipOrigin.style.clipPath = `polygon(100% 0, 100% 0, 100% 70%, 100% 70%)`;
        }
        if (tipAlt) {
            tipAlt.style.clipPath = `polygon(0 0, 100% 0,100% 70%, 0 70%)`;
        }
        if (sweepLine) {
            sweepLine.style.left = '100%';
            sweepLine.style.boxShadow = '6px 2px 4px 0px #af2d78d1';
        }
        fadeOutAnimation.finished.then(() => {
            loader.remove();
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    updateProgress(30);
});

window.addEventListener('load', function() {
    updateProgress(100);
});