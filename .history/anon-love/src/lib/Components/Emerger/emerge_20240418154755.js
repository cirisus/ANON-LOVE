export function observe(element, callback) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback();
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(element);
}