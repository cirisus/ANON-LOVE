export function setupSideNav(sideNav) {
    const sideNavWidth = 200;
    const minDistance = 50;
    const maxDistance = 300;
    const minRotateY = 30;
    const maxRotateY = 0;
    const minOpacity = 0;
    const maxOpacity = 1;

    document.addEventListener('mousemove', (event) => {
        const distanceFromRight = window.innerWidth - event.clientX;
        if (distanceFromRight < maxDistance) {
            const normalizedDistance = (distanceFromRight - minDistance) / (maxDistance - minDistance);
            const rotateY = normalizedDistance * (maxRotateY - minRotateY) - minRotateY;
            const opacity = 1 - (minOpacity + Math.log(normalizedDistance + 1) / Math.log(2) * (maxOpacity - minOpacity));
            sideNav.style.transform = `rotateY(clamp(0,${rotateY},30)deg)`;
            sideNav.style.opacity = `clamp(0,${opacity},1)`;
        } else {
            sideNav.style.transform = `rotateY(${minRotateY}deg)`;
            sideNav.style.opacity = '0';
        }
    });
}