export function setupSideNav(sideNav) {
    const minDistance = 150;
    const maxDistance = 300;
    const minRotateY = -30;
    const maxRotateY = 0;
    const minOpacity = 0;
    const maxOpacity = 1;

    const translateX1Start = -0.5;
    const translateX1End = -1.2;
    const translateX2Start = -1.2;
    const translateX2End = -0.4;

    document.addEventListener('mousemove', (event) => {
        const distanceFromRight = window.innerWidth - event.clientX;
        if (distanceFromRight < maxDistance) {
            let normalizedDistance = 1 - (distanceFromRight - minDistance) / (maxDistance - minDistance);
            normalizedDistance = Math.max(0, Math.min(1, normalizedDistance));
            const rotateY = (1 - normalizedDistance) * (maxRotateY - minRotateY);
            const opacity = minOpacity + normalizedDistance * (maxOpacity - minOpacity);

            let translateX;
            if (normalizedDistance < 0.4) {
                translateX = translateX1Start + normalizedDistance / 0.4 * (translateX1End - translateX1Start);
            } else {
                translateX = translateX2Start + (normalizedDistance - 0.4) / 0.6 * (translateX2End - translateX2Start);
            }

            sideNav.style.transform = `rotateY(${rotateY}deg) translateX(${translateX}rem)`;
            sideNav.style.opacity = `${opacity}`;
            sideNav.style.pointerEvents = 'auto';
        } else {
            sideNav.style.transform = `rotateY(${minRotateY}deg) translateX(${translateX1Start}rem)`;
            sideNav.style.opacity = `${minOpacity}`;
        }
    });
}