export function setupSideNav(sideNav) {
    const sideNavWidth = 200;
    const minDistance = 50;
    const maxDistance = 300;
    const minRotateY = -30;
    const maxRotateY = 0;
    const minOpacity = 0;
    const maxOpacity = 1;

    document.addEventListener('mousemove', (event) => {
        const distanceFromRight = window.innerWidth - event.clientX;
        if (distanceFromRight < maxDistance) {
            const normalizedDistance = (distanceFromRight - minDistance) / (maxDistance - minDistance);
            const rotateY = minRotateY + normalizedDistance * (maxRotateY - minRotateY);
            const opacity = minOpacity + Math.log(normalizedDistance + 1) / Math.log(2) * (maxOpacity - minOpacity);
            sideNav.style.transform = `rotateY(${rotateY}deg)`;
            sideNav.style.opacity = `${opacity}`;
        } else {
            sideNav.style.transform = `rotateY(${minRotateY}deg)`;
            sideNav.style.opacity = '0';
        }
    });
}