import lottie from 'lottie-web';

export function loadAnimation() {
    const container = document.querySelector('.anon-signature');
    fetch('anon-love/public/asset/anon_signature.json')
        .then(response => response.json())
        .then(data => {
            lottie.loadAnimation({
                container: container,
                renderer: 'canvas',
                loop: false,
                autoplay: true,
                animationData: data
            });
        });
}