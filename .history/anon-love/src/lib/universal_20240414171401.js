export function ripple(node) {
    function createRipple(event) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${event.clientX - node.getBoundingClientRect().left}px`;
        ripple.style.top = `${event.clientY - node.getBoundingClientRect().top}px`;
        node.appendChild(ripple);
        setTimeout(() => {
        ripple.remove();
        }, 1000);
    }

    node.addEventListener('click', createRipple);

    return {
        destroy() {
        node.removeEventListener('click', createRipple);
        }
    };
}