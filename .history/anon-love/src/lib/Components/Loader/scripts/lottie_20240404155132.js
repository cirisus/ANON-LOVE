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
    animation.setSpeed(0.6);

    return new Promise(resolve => {
        setTimeout(() => {
            animation.playSegments([0, 225], true);
        }, 200);
        container.addEventListener('click', () => {
            animation.play();
    });
  });
}