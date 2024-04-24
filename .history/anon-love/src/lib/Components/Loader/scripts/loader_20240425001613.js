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
let isDestroying = false;

export function destroyLoader() {
    console.log("Starting destroyLoader function");
    if (isDestroying) {
        console.log("Loader is already being destroyed, exiting function");
        return;
    }
    isDestroying = true;
    console.log("Set isDestroying to true");

    const loader = document.querySelector('#loader');
    console.log("Selected #loader element");
    const descendants = loader.querySelectorAll('*');
    console.log("Selected all descendants of #loader");
    const allAnimations = Array.from(descendants).flatMap(descendant => descendant.getAnimations());
    console.log("Got all animations of descendants");
    Promise.all(allAnimations.map(animation => animation.finished))
    .then(() => {
        console.log("All animations finished");
        const fadeOutAnimation = loader.animate([
            { opacity: 1, backdropFilter: 'blur(1rem) brightness(1.15) saturate(0.5)', filter: 'blur(0)', transform: 'scale(1)'},
            { opacity: 0.85, backdropFilter: 'blur(0.5rem) brightness(1.05) saturate(0.8)', filter: 'blur(0)', transform: 'scale(1)' },
            { opacity: 0, backdropFilter: 'blur(0) brightness(1) saturate(1)', filter: 'blur(3rem)', transform: 'scale(2)'}
        ], {
            duration: 2000,
            easing: 'cubic-bezier(0.4, 0, 0.6, 1)',
            fill: 'forwards'
        });
        console.log("Started fade out animation");
        const tipOrigin = document.querySelector('.tip-origin');
        const tipAlt = document.querySelector('.tip-alt');
        const sweepLine = document.querySelector('.sweep-line');
        if (tipOrigin) {
            tipOrigin.style.clipPath = `polygon(100% 0, 100% 0, 100% 70%, 100% 70%)`;
            console.log("Updated clipPath of .tip-origin");
        }
        if (tipAlt) {
            tipAlt.style.clipPath = `polygon(0 0, 100% 0,100% 70%, 0 70%)`;
            console.log("Updated clipPath of .tip-alt");
        }
        if (sweepLine) {
            sweepLine.style.left = '100%';
            console.log("Updated left of .sweep-line");
        }
        fadeOutAnimation.finished.then(() => {
            console.log("Fade out animation finished");
            loader.remove();
            console.log("Removed #loader element");
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    updateProgress(30);
});

window.addEventListener('load', function() {
    updateProgress(100);
});