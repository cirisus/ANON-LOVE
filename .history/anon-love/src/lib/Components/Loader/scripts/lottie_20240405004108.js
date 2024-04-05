export async function loadAnimation(containerSelector, pseudoElementSelector, childElementSelector) {
    const container = document.querySelector(containerSelector);

    const response = await fetch('anon-love/public/asset/anon-signature.json');
    const data = await response.json();

    const animation = lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: data
    });

    return new Promise(resolve => {
        animation.addEventListener('complete', () => {
            if (animation.currentFrame === 315) {
                container.style.display = 'none';
            }
        });

        setTimeout(() => {
            animation.setSpeed(0.75);
            animation.playSegments([0, 225], true);
        }, 500);

        const playRestOfAnimation = function() {
            if (animation.isPaused) {
                animation.setSpeed(0.45);
                animation.playSegments([226, 315], true);
                ['click', 'touchstart', 'keydown'].forEach(event => {
                    document.removeEventListener(event, playRestOfAnimation);
                });

                // 为伪元素添加动画
                const pseudoElements = document.querySelectorAll(pseudoElementSelector);
                pseudoElements.forEach(element => {
                    element.style.setProperty('--clip-text', 'SweepText .3s cubic-bezier(.4,0,.6,1) forwards');
                });

                // 为子元素添加动画
                const childElements = document.querySelectorAll(childElementSelector);
                childElements.forEach(element => {
                    element.style.animation = 'sweepLine .3s cubic-bezier(.4,0,.6,1) forwards';
                });

                resolve();
            }
        };

        ['click', 'touchstart', 'keydown'].forEach(event => {
            document.addEventListener(event, playRestOfAnimation);
        });
    });
}