export default function handleScroll(scroller, scrollBoxes) {
    let currentIndex = 0;
    let unitHeight = scrollBoxes[0].offsetHeight;
    let minScrollDistance = 10;
    let debounceTimeout = null;

    window.addEventListener('wheel', event => {
        event.preventDefault();

        let scrollDistance = Math.abs(event.deltaY);
        if (scrollDistance < minScrollDistance) {
            return;
        }

        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        let deltaY = event.deltaY; // Save event.deltaY

        debounceTimeout = setTimeout(() => {
            if (deltaY > 0) { // Use the saved deltaY
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
        }, 1000);
    }, { passive: false });
}