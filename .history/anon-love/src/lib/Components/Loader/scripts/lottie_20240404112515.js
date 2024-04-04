import lottie from 'lottie-web';

export async function loadAnimation(container) {
    const response = await fetch('anon-love/public/asset/anon-signature.json');
    const data = await response.json();

    const animation = lottie.loadAnimation({
        container: container,
        renderer: 'canvas',
        loop: false,
        autoplay: false,
        animationData: data
    });
    animation.setSpeed(0.6);

    return new Promise(resolve => {
        animation.addEventListener('complete', () => {
            container.style.display = 'none';
            resolve();
        });
        setTimeout(() => {
            animation.play();
        }, 1000);
    });
}