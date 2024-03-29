export function setupSideNav(sideNav) {
    const sideNavWidth = 200;
    document.addEventListener('mousemove', (event) => {
        const distanceFromRight = window.innerWidth - event.clientX;
        if (distanceFromRight < sideNavWidth) {
            const sideNavPosition = Math.min(0, sideNavWidth - distanceFromRight);
            const opacity = 1 - (sideNavPosition / sideNavWidth);
            const transformValue = 90 * (sideNavPosition / sideNavWidth);
            sideNav.style.right = `${sideNavPosition}px`;
            sideNav.style.opacity = `${opacity}`;
            sideNav.style.transform = `perspective(600px) rotateX(${transformValue}deg)`;
        } else {
            sideNav.style.right = `-${sideNavWidth}px`;
            sideNav.style.opacity = '0';
            sideNav.style.transform = 'perspective(600px) rotateX(90deg)';
        }
    });
}