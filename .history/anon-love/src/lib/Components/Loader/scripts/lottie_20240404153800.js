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
    animation.goToAndStop(225, true);
    const events = ['click', 'keydown', 'touchstart'];
    events.forEach(event => document.addEventListener(event, function() {
        animation.play();
    }));

    return new Promise(resolve => {
        animation.addEventListener('complete', () => {
            const svgNS = "http://www.w3.org/2000/svg";
            const filter = document.createElementNS(svgNS, 'filter');
            filter.setAttribute('id', 'blur');
            const blur = document.createElementNS(svgNS, 'feGaussianBlur');
            blur.setAttribute('in', 'SourceGraphic');
            blur.setAttribute('stdDeviation', '5');
            filter.appendChild(blur);
            container.querySelector('svg').appendChild(filter);

            const svgElement = container.querySelector('svg');
            svgElement.style.filter = 'url(#blur)';
            resolve();
        });
        setTimeout(() => {
            animation.play();
        }, 2000);
    });
}