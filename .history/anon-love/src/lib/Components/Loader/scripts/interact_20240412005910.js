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
        const rotateY = x / width * 90;
        const rotateX = -y / height * 40;
        const translateZ = 0;
        const translateX = x / width * 60;
        const translateY = y / height * 60 + height * -0.1;
        // Modify the transform-origin with lerp
        const targetOriginX = Math.min(Math.max(e.pageX / width, 0.45), 0.55) * 100;
        const targetOriginY = Math.min(Math.max(e.pageY / height, 0.45), 0.55) * 100;
        originX += (targetOriginX - originX) * 0.05;
        originY += (targetOriginY - originY) * 0.05;
        element.style.transformOrigin = `${originX}% ${originY}%`;
        element.style.transform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    window.addEventListener('mouseout', function() {
        centerX = 0;
        centerY = 0;
        element.style.transform = `translate3d(0px, ${window.innerHeight * -0.1}px, 0px) rotateX(0deg) rotateY(0deg)`;
    });
}