export function addMouseMoveListener(element) {
    let centerX = 0;
    let centerY = 0;
    let originX = 50;
    let originY = 50;

    window.addEventListener('mousemove', function(e) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const x = e.pageX - width / 2;
        const y = e.pageY - height / 2;
        const rotateY = x >= 0 ? Math.ceil(x / width * 90) : Math.floor(x / width * 90);
        const rotateX = y >= 0 ? Math.ceil(-y / height * 40) : Math.floor(-y / height * 40);
        const translateZ = 0;
        const translateX = x >= 0 ? Math.ceil(x / width * 60) : Math.floor(x / width * 60);
        const translateY = y >= 0 ? Math.ceil(y / height * 60 + height * -0.1) : Math.floor(y / height * 60 + height * -0.1);
        // Modify the transform-origin with lerp
        const targetOriginX = Math.min(Math.max(e.pageX / width, 0.45), 0.55) * 100;
        const targetOriginY = Math.min(Math.max(e.pageY / height, 0.45), 0.55) * 100;
        originX += (targetOriginX - originX) * 0.05;
        originY += (targetOriginY - originY) * 0.05;
        originX = originX >= 0 ? Math.ceil(originX) : Math.floor(originX);
        originY = originY >= 0 ? Math.ceil(originY) : Math.floor(originY);
        element.style.transformOrigin = `${originX}% ${originY}%`;
        element.style.transform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    window.addEventListener('mouseout', function() {
        centerX = 0;
        centerY = 0;
        element.style.transform = `translate3d(0px, ${window.innerHeight * -0.1}px, 0px) rotateX(0deg) rotateY(0deg)`;
    });
}