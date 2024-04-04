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

        container.addEventListener('click', function playRestOfAnimation() {
            if (animation.isPaused) {
                animation.setSpeed(0.6);
                animation.playSegments([226, 315], true);
                container.removeEventListener('click', playRestOfAnimation);
                resolve();
            }
        });
    });
}