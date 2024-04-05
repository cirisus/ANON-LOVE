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
        animation.addEventListener('complete', () => {
            container.style.animation = 'fade 0.3s ease forwards, blur 0.3s ease forwards';
            setTimeout(() => {
                container.style.display = 'none';
                resolve();
            }, 600);
        });
        setTimeout(() => {
            animation.play();
        }, 200);
    });
}