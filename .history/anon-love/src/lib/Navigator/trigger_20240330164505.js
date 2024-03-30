export function setupSideNav(sideNav) {
    const minDistance = 50;
    const maxDistance = 300;
    const minRotateY = -30;
    const maxRotateY = 0;
    const minOpacity = 0;
    const maxOpacity = 1;

    document.addEventListener('mousemove', (event) => {
        const distanceFromRight = window.innerWidth - event.clientX;
        if (distanceFromRight < maxDistance) {
            let normalizedDistance = 1 - (distanceFromRight - minDistance) / (maxDistance - minDistance);
            normalizedDistance = Math.max(0, Math.min(1, normalizedDistance));
            const rotateY = 30 - normalizedDistance * (maxRotateY - minRotateY);
            const opacity = minOpacity + normalizedDistance * (maxOpacity - minOpacity);
            sideNav.style.transform = `rotateY(${rotateY}deg)`;
            sideNav.style.opacity = `${opacity}`;
        } else {
            sideNav.style.transform = `rotateY(${minRotateY}deg)`;
            sideNav.style.opacity = `${minOpacity}`;
        }
    });
}