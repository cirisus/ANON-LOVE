export function addMouseMoveListener(element) {
    let centerX = 0;
    let centerY = 0;
    element.addEventListener('mousemove', function(e) {
        const width = this.offsetWidth;
        const height = this.offsetHeight;
        const x = e.pageX - this.offsetLeft - width / 2;
        const y = e.pageY - this.offsetTop - height / 2;
        const rotateY = x / width * 60;
        const rotateX = -y / height * 50;
        const translateZ = -300;
        const translateX = x / width * 40;
        const translateY = y / height * 40;

        centerX += (x - centerX) * 0.01;
        centerY += (y - centerY) * 0.01;
        this.style.transform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
}