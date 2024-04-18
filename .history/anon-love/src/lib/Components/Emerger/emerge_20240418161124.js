export function observe(element, callback) {
    let checkVisibility = () => {
        let rect = element.getBoundingClientRect();
        let isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isInViewport) {
            callback();
            window.removeEventListener('scroll', checkVisibility);
        }
    };

    window.addEventListener('scroll', checkVisibility);
}