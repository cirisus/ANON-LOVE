export function addMouseMoveListener(element) {
    let centerX = 0;
    let centerY = 0;

    element.addEventListener('mousemove', function(e) {
        const width = this.offsetWidth;
        const height = this.offsetHeight;
        const x = e.pageX - this.offsetLeft - width / 2;
        const y = e.pageY - this.offsetTop - height / 2;
        const rotateY = x / width * 90;
        const rotateX = -y / height * 75;
        const translateZ = 0;
        const translateX = x / width * 60;
        const translateY = y / height * 60 + height * -0.1; 
        this.style.transform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    element.addEventListener('mouseout', function() {
        centerX = 0;
        centerY = 0;
        this.style.transform = `translate3d(0px, ${this.offsetHeight * -0.1}px, 0px) rotateX(0deg) rotateY(0deg)`;
    });
}