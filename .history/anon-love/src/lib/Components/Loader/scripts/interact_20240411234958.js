export function addMouseMoveListener(element) {
    element.addEventListener('mousemove', function(e) {
        const width = this.offsetWidth;
        const height = this.offsetHeight;
        const x = e.pageX - this.offsetLeft - width / 2;
        const y = e.pageY - this.offsetTop - height / 2;
        const rotateY = x / width * 30;
        const rotateX = -y / height * 30;
        const translateZ = -100;
        this.style.transform = `translate3d(0px, 0px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
}