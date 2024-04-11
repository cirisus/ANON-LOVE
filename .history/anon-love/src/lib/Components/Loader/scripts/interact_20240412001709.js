export function addMouseMoveListener(element) {
    let lastTime = 0;
    let x = 0;
    let y = 0;

    function update() {
        const width = element.offsetWidth;
        const height = element.offsetHeight;
        const rotateY = x / width * 60;
        const rotateX = -y / height * 50;
        const translateZ = -300;
        const translateX = x / width * 40;
        const translateY = y / height * 40;
        element.style.transform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        requestAnimationFrame(update);
    }

    element.addEventListener('mousemove', function(e) {
        const now = Date.now();
        if (now - lastTime > 1000 / 3) {
            x = e.pageX - this.offsetLeft - width / 2;
            y = e.pageY - this.offsetTop - height / 2;
            lastTime = now;
        }
    });

    requestAnimationFrame(update);
}