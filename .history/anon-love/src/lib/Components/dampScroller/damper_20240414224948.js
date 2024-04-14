export default function handleScroll(scroller, scrollBoxes) {
    let currentIndex = 0;
    let unitHeight = scrollBoxes[0].offsetHeight;
    let minScrollDistance = 10;
    let lastScrollTime = 0; // Record the time of the last scroll event

    window.addEventListener('wheel', event => {
        event.preventDefault();

        let scrollDistance = Math.abs(event.deltaY);
        if (scrollDistance < minScrollDistance) {
            return;
        }

        let currentTime = new Date().getTime(); // Get the current time
        if (currentTime - lastScrollTime < 1000) { // If less than 1 second has passed since the last scroll event, ignore this scroll event
            return;
        }
        lastScrollTime = currentTime;

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