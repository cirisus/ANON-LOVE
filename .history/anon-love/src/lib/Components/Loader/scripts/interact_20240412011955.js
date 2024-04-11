export function addMouseMoveListener(element) {
    let originX = 50;
    let originY = 50;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const lerpFactor = 0.1;

    window.addEventListener('mousemove', function(e) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        targetX = e.pageX - width / 2;
        targetY = e.pageY - height / 2;
        // Modify the transform-origin with lerp
        const targetOriginX = Math.min(Math.max(e.pageX / width, 0.45), 0.55) * 100;
        const targetOriginY = Math.min(Math.max(e.pageY / height, 0.45), 0.55) * 100;
        originX += (targetOriginX - originX) * lerpFactor;
        originY += (targetOriginY - originY) * lerpFactor;
        originX = originX >= 0 ? Math.ceil(originX) : Math.floor(originX);
        originY = originY >= 0 ? Math.ceil(originY) : Math.floor(originY);
    });

    function animate() {
        currentX += (targetX - currentX) * lerpFactor;
        currentY += (targetY - currentY) * lerpFactor;
        const rotateY = Math.log1p(Math.abs(currentX)) * (currentX >= 0 ? 90 : -90);
        const rotateX = Math.log1p(Math.abs(currentY)) * (currentY >= 0 ? -40 : 40);
        const translateZ = 0;
        const translateX = Math.log1p(Math.abs(currentX)) * (currentX >= 0 ? 60 : -60);
        const translateY = Math.log1p(Math.abs(currentY)) * (currentY >= 0 ? 60 : -60) + window.innerHeight * -0.1;
        element.style.transformOrigin = `${originX}% ${originY}%`;
        element.style.transform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('mouseout', function() {
        targetX = 0;
        targetY = 0;
    });
}