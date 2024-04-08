let initialBlur = 150;
let initialScale = 1.7;
let blurDuration = 1300;
let scaleDuration = 1550;

function setInitialStyles(sibling) {
    sibling.style.filter = `blur(${initialBlur}px)`;
    sibling.style.transform = `scale(${initialScale})`;
}

function removeInitialStyles(sibling) {
    sibling.style.filter = '';
    sibling.style.transform = '';
}

function applyTransition(sibling) {
    let blurAnimation = sibling.animate(
        [
            { filter: `blur(${initialBlur}px)`, offset: 0 },
            { filter: 'blur(0px)', offset: 1 }
        ],
        {
            duration: blurDuration,
            easing: 'ease-out'
        }
    );

    let scaleAnimation = sibling.animate(
        [
            { transform: `scale(${initialScale})`, offset: 0 },
            { transform: 'scale(1)', offset: 1 }
        ],
        {
            duration: scaleDuration,
            easing: 'ease-out'
        }
    );

    return [blurAnimation, scaleAnimation];
}

function blurAndScaleSiblings(loader) {
    let sibling = loader.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== loader) {
            setInitialStyles(sibling); // 页面加载时设置初始样式
        }
        sibling = sibling.nextSibling;
    }
}

export function blurSiblingsOfLoader() {
    const loader = document.querySelector('#loader');

    if (loader) {
        blurAndScaleSiblings(loader); // 页面加载时设置初始样式

        const handleEvent = () => {
            let sibling = loader.parentNode.firstChild;
            while (sibling) {
                if (sibling.nodeType === 1 && sibling !== loader) {
                    removeInitialStyles(sibling); // 用户点击后移除初始样式
                    applyTransition(sibling); // 开始动画
                }
                sibling = sibling.nextSibling;
            }
            ['click', 'touchstart', 'keydown'].forEach(event => {
                document.removeEventListener(event, handleEvent);
            });
        };
        ['click', 'touchstart', 'keydown'].forEach(event => {
            document.addEventListener(event, handleEvent);
        });
    }
}