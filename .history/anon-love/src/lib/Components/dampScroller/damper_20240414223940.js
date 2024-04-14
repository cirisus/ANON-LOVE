export default function handleScroll(scroller, scrollBoxes) {
    let currentIndex = 0;
    let unitHeight = scrollBoxes[0].offsetHeight;
    let minScrollDistance = 10;
    let lastScrollTop = window.scrollY;

    window.addEventListener('wheel', event => {
        event.preventDefault();

        let scrollDistance = Math.abs(window.scrollY - lastScrollTop);
        if (scrollDistance < minScrollDistance) {
            return;
        }

        lastScrollTop = window.scrollY;

        if (event.deltaY > 0) {
            currentIndex = Math.min(currentIndex + 1, scrollBoxes.length - 1);
            console.log('scroll down')
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
            console.log('scroll up')
        }

        scrollBoxes.forEach((box, index) => {
            box.dataset.toggle = index === currentIndex ? 'show' : 'hide';
        });

        scroller.style.transform = `translateY(${-unitHeight * currentIndex}px)`;
    }, { passive: false });
}