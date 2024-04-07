function applyTransition(sibling) {
    // 开始模糊
    sibling.style.filter = 'blur(5px)';
    sibling.style.transform = 'scale(1.5)';
    let start = null;
    function step(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        let blurValue = Math.max(5 - 5 * progress / 2000, 0);
        let scaleValue = Math.max(1.5 - 0.5 * progress / 2500, 1);
        sibling.style.filter = `blur(${blurValue}px)`;
        sibling.style.transform = `scale(${scaleValue})`;
        if (progress < 2500) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
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
        loader.addEventListener('click', () => {
            blurAndScaleSiblings(loader);
        });
    }
}