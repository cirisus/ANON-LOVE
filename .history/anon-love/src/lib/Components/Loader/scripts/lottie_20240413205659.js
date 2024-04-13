import lottie from 'lottie-web';

function handleAnimationComplete(animation, container) {
    if (animation.currentFrame === 315) {
        container.style.display = 'none';
    }
}

function playInitialAnimation(animation) {
    animation.setSpeed(0.75);
    animation.playSegments([0, 223], true);
}

function playRestOfAnimation(animation, resolve) {
    if (animation.isPaused) {
        animation.setSpeed(0.45);
        animation.playSegments([224, 315], true);
        ['click', 'touchstart', 'keydown'].forEach(event => {
            document.removeEventListener(event, playRestOfAnimation);
        });
        resolve();
    }
}

export async function loadAnimation(container) {
    let response;
    try {
        response = await fetch('anon-love/public/asset/anon-signature.json');
    } catch (error) {
        console.error('Fetch error: ', error);
        return;
    }

    let data;
    try {
        data = await response.json();
    } catch (error) {
        console.error('Parsing error: ', error);
        return;
    }

    const animation = lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: data
    });

    return new Promise(resolve => {
        animation.addEventListener('complete', () => handleAnimationComplete(animation, container));

        setTimeout(() => playInitialAnimation(animation), 500);

        setTimeout(() => {
            ['click', 'touchstart', 'keydown'].forEach(event => {
                document.addEventListener(event, () => playRestOfAnimation(animation, resolve));
            });
        }, 3500);
    });
}