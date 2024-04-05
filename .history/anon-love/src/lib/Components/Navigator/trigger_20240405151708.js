export function setupSideNav(sideNav) {
    const minDistance = 125;
    const maxDistance = 300;
    const minRotateY = -20;
    const maxRotateY = 0;
    const minOpacity = 0;
    const maxOpacity = 1;

    const translateXStart1 = -0.5;
    const translateXEnd1 = -1;
    const translateXStart2 = -1;
    const translateXEnd2 = -0.5;

    let distanceFromRight = window.innerWidth;

    function updateSideNav() {
        if (distanceFromRight < maxDistance) {
            let normalizedDistance = 1 - (distanceFromRight - minDistance) / (maxDistance - minDistance);
            normalizedDistance = Math.max(0, Math.min(1, normalizedDistance));
            const rotateY = (1 - normalizedDistance) * (maxRotateY - minRotateY);
            const opacity = minOpacity + normalizedDistance * (maxOpacity - minOpacity);

            let translateX;
            if (normalizedDistance < 0.4) {
                translateX = translateXStart1 + normalizedDistance / 0.4 * (translateXEnd1 - translateXStart1);
            } else {
                translateX = translateXStart2 + (normalizedDistance - 0.4) / 0.6 * (translateXEnd2 - translateXStart2);
            }

            sideNav.style.transform = `rotateY(${rotateY}deg) translateX(${translateX}rem)`;
            sideNav.style.opacity = `${opacity}`;
            sideNav.style.pointerEvents = 'auto';
        } else {
            sideNav.style.transform = `rotateY(${minRotateY}deg) translateX(${translateXStart1}rem)`;
            sideNav.style.opacity = `${minOpacity}`;
        }

        requestAnimationFrame(updateSideNav);
    }

    document.addEventListener('mousemove', (event) => {
        distanceFromRight = window.innerWidth - event.clientX;
    });

    updateSideNav();
}