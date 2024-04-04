import lottie from 'lottie-web';

export async function loadAnimation(container) {
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
                    container.removeEventListener(event, playRestOfAnimation);
                });
                resolve();
            }
        };

        ['click', 'touchstart', 'keydown'].forEach(event => {
            container.addEventListener(event, playRestOfAnimation);
        });
    });
}