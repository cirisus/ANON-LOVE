let initialBlur = parseFloat('10rem');
let initialScale = 1.7;
let blurDuration = 1300;
let scaleDuration = 1550;

function setInitialStyles(sibling) {
    sibling.style.transform = `scale(${initialScale})`;
}

function applyTransition(sibling) {
    let start = null;
    function step(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        let scaleValue = initialScale - (initialScale - 1) * (1 - Math.pow(1 - progress / scaleDuration, 2));
        sibling.style.transform = `scale(${scaleValue})`;
        if (progress < scaleDuration) {
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
                document.removeEventListener(event, handleEvent);
            });
        };
        setTimeout(() => {
            ['click', 'touchstart', 'keydown'].forEach(event => {
                document.addEventListener(event, handleEvent);
            });
        }, 3500);
    }
}