let initialBlur = 150;
let initialScale = 1.7;
let blurDuration = 1300;
let scaleDuration = 1550;

function applyTransition(sibling) {
    let blurAnimation = sibling.animate(
        [
            { filter: `blur(${initialBlur}px)`, offset: 0 },
            { filter: 'blur(0px)', offset: 1 }
        ],
        {
            duration: blurDuration,
            easing: 'ease-out'
        }
    );

    let scaleAnimation = sibling.animate(
        [
            { transform: `scale(${initialScale})`, offset: 0 },
            { transform: 'scale(1)', offset: 1 }
        ],
        {
            duration: scaleDuration,
            easing: 'ease-out'
        }
    );

    return [blurAnimation, scaleAnimation];
}

function blurAndScaleSiblings(loader) {
    let sibling = loader.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== loader) {
            applyTransition(sibling);
        }
        sibling = sibling.nextSibling;
    }
}

export function blurSiblingsOfLoader() {
    const loader = document.querySelector('#loader');

    if (loader) {
        const handleEvent = () => {
            blurAndScaleSiblings(loader);
            ['click', 'touchstart', 'keydown'].forEach(event => {
                document.removeEventListener(event, handleEvent);
            });
        };
        ['click', 'touchstart', 'keydown'].forEach(event => {
            document.addEventListener(event, handleEvent);
        });
    }
}