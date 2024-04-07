let initialBlur = '10rem';
let initialScale = 1.5;
let blurDuration = 600;
let scaleDuration = 800;

function setInitialStyles(sibling) {
    sibling.style.filter = `blur(${initialBlur})`;
    sibling.style.transform = `scale(${initialScale})`;
}

function applyTransition(sibling) {
    let start = null;
    function step(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        let blurValue = Math.max(parseFloat(initialBlur) - parseFloat(initialBlur) * progress / blurDuration, 0);
        let scaleValue = Math.max(initialScale - 0.5 * progress / scaleDuration, 1);
        sibling.style.filter = `blur(${blurValue}rem)`;
        sibling.style.transform = `scale(${scaleValue})`;
        if (progress < Math.max(blurDuration, scaleDuration)) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}

function blurAndScaleSiblings(loader) {
    let sibling = loader.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== loader) {
            setInitialStyles(sibling);
        }
        sibling = sibling.nextSibling;
    }
}

export function blurSiblingsOfLoader() {
    const loader = document.querySelector('#loader');

    if (loader) {
        blurAndScaleSiblings(loader);

        const handleEvent = () => {
            let sibling = loader.parentNode.firstChild;
            while (sibling) {
                if (sibling.nodeType === 1 && sibling !== loader) {
                    applyTransition(sibling);
                }
                sibling = sibling.nextSibling;
            }
            ['click', 'touchstart', 'keydown'].forEach(event => {
                loader.removeEventListener(event, handleEvent);
            });
        };

        ['click', 'touchstart', 'keydown'].forEach(event => {
            loader.addEventListener(event, handleEvent);
        });
    }
}