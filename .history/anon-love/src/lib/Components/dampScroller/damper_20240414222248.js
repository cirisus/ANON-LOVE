export default function handleScroll(scrollBoxes) {
    let currentIndex = 0;
    let unitHeight = scrollBoxes[0].offsetHeight;

    window.addEventListener('wheel', event => {
        event.preventDefault();

        if (event.deltaY > 0) {
            currentIndex = Math.min(currentIndex + 1, scrollBoxes.length - 1);
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
        }

        scrollBoxes.forEach((box, index) => {
            box.dataset.toggle = index === currentIndex ? 'show' : 'hide';
        });

        scrollBoxes[currentIndex].style.transform = `translateY(${-unitHeight * currentIndex}px)`;
    }, { passive: false });
}