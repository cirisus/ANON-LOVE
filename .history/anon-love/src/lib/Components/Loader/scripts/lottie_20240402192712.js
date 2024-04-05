import lottie from 'lottie-web';

export async function loadAnimation(container) {
    const response = await fetch('anon-love/public/asset/anon-signature.json');
    const data = await response.json();

    const animation = lottie.loadAnimation({
        container: container,
        renderer: 'canvas',
        loop: false,
        autoplay: true,
        animationData: data
    });
    animation.addEventListener('complete', () => {
        container.style.display = 'none';
    });
    await new Promise(resolve => setTimeout(resolve, 2000));
    animation.play();
}