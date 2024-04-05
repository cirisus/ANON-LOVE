import lottie from 'lottie-web';

export function loadAnimation() {
    const container = document.querySelector('.anon-signature');
    let animation;

    fetch('anon-love/public/asset/anon-signature.json')
        .then(response => response.json())
        .then(data => {
            animation = lottie.loadAnimation({
                container: container,
                renderer: 'canvas',
                loop: false,
                autoplay: true,
                animationData: data
            });
            animation.addEventListener('complete', () => {
                container.style.display = 'none';
            });
            setTimeout(() => {
                animation.play();
            }, 2000);
        });
    return container;
}