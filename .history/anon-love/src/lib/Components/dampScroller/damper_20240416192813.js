export default function handleScroll(scroller, scrollBoxes) {
    let currentIndex = 0;
    let unitHeight = scrollBoxes[0].offsetHeight;
    let totalHeight = unitHeight * scrollBoxes.length;
    let minScrollDistance = 10;
    let lastScrollTime = 0;
    const debounceInterval = 750;
    let startY = 0;

    function scroll(event, deltaY) {
        event.preventDefault();

        let scrollDistance = Math.abs(deltaY);
        if (scrollDistance < minScrollDistance) {
            return;
        }

        let currentTime = new Date().getTime();
        if (currentTime - lastScrollTime < debounceInterval) {
            return;
        }
        lastScrollTime = currentTime;

        if (deltaY > 0) {``
            currentIndex = Math.min(currentIndex + 1, scrollBoxes.length - 1);
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
        }

        let targetScrollPosition = -unitHeight * currentIndex;
        if (targetScrollPosition < -totalHeight) {
            targetScrollPosition = -totalHeight;
        }

        scrollBoxes.forEach((box, index) => {
            box.dataset.toggle = index === currentIndex ? 'show' : 'hide';
        });

        scroller.style.transform = `translateY(${targetScrollPosition}px)`;
    }

    function updateDimensions() {
        unitHeight = scrollBoxes[0].offsetHeight;
        totalHeight = unitHeight * scrollBoxes.length;

        let currentScrollPosition = Math.abs(parseInt(scroller.style.transform.split('(')[1]));
        if (currentScrollPosition / unitHeight !== currentIndex) {
            currentIndex = Math.ceil(currentScrollPosition / unitHeight);
            currentIndex = Math.max(0, Math.min(currentIndex, scrollBoxes.length - 1));
            scroller.style.transform = `translateY(${-unitHeight * currentIndex}px)`;
        }
}

    window.addEventListener('wheel', event => {
        scroll(event, event.deltaY);
    }, { passive: false });

    window.addEventListener('touchstart', event => {
        startY = event.touches[0].clientY;
    }, { passive: false });

    window.addEventListener('touchmove', event => {
        let deltaY = startY - event.touches[0].clientY;
        scroll(event, deltaY);
    }, { passive: false });

    window.addEventListener('resize', updateDimensions);
}