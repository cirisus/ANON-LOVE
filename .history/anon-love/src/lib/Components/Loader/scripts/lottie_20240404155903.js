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
    animation.setSpeed(0.75);

    return new Promise(resolve => {
        animation.addEventListener('complete', () => {
            // 添加 CSS 动画
            container.style.animation = 'fade 0.5s';

            // 在 CSS 动画结束后，删除动画对象
            container.addEventListener('animationend', () => {
                animation.destroy();
                resolve(); // 解决 Promise
            });
        });

        setTimeout(() => {
            animation.playSegments([0, 225], true); // 播放到第225帧并暂停
        }, 200);

        container.addEventListener('click', () => {
            animation.play(); // 在点击后继续播放
        });
    });
}