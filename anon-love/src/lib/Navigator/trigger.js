export function setupSideNav(sideNav) {
    document.addEventListener('mousemove', (event) => {
        const distanceFromRight = window.innerWidth - event.clientX;
        if (distanceFromRight < 200) {
            sideNav.style.right = '0';
        } else {
            sideNav.style.right = '-200px';
        }
    });
}