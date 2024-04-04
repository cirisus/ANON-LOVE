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
            if (animation.currentFrame === 225) { // 只有当动画播放到最后一帧时，才隐藏容器并解决 Promise
                container.style.display = 'none';
                resolve();
            }
        });

        setTimeout(() => {
            animation.playSegments([0, 225], true); // 播放到第225帧并暂停
        }, 500);

        container.addEventListener('click', function playRestOfAnimation() {
            if (animation.isPaused) {
                animation.playSegments([226, 285], true); // 在点击后从第226帧开始播放
                container.removeEventListener('click', playRestOfAnimation); // 移除事件监听器
            }
        });
    });
}