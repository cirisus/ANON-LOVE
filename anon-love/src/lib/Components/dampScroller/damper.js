export default function handleScroll(scroller, scrollBoxes) {
    let currentIndex = 0;
    let unitHeight = scrollBoxes[0].offsetHeight;
    let minScrollDistance = 10;
    let lastScrollTime = 0;
    const debounceInterval = 750;

    window.addEventListener('wheel', event => {
        event.preventDefault();

        let scrollDistance = Math.abs(event.deltaY);
        if (scrollDistance < minScrollDistance) {
            return;
        }

        let currentTime = new Date().getTime();
        if (currentTime - lastScrollTime < debounceInterval) {
            return;
        }
        lastScrollTime = currentTime;

        if (event.deltaY > 0) {
            currentIndex = Math.min(currentIndex + 1, scrollBoxes.length - 1);
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
        }

        scrollBoxes.forEach((box, index) => {
            box.dataset.toggle = index === currentIndex ? 'show' : 'hide';
        });

        scroller.style.transform = `translateY(${-unitHeight * currentIndex}px)`;
    }, { passive: false });
}