const loadingElement = document.createElement('div');
loadingElement.style.position = 'fixed';
loadingElement.style.top = '0';
loadingElement.style.left = '0';
loadingElement.style.width = '100%';
loadingElement.style.height = '2px';
loadingElement.style.backgroundColor = 'blue';
loadingElement.style.animation = 'progress 2s linear forwards';

document.body.appendChild(loadingElement);


window.addEventListener('load', () => {
    setTimeout(() => {
        loadingElement.style.display = 'none';
    }, 2000);
});
const navigationEntries = performance.getEntriesByType('navigation');
if (navigationEntries.length > 0) {
    const navigation = navigationEntries[0];
    const pageLoadTime = navigation.domComplete - navigation.startTime;

    loadingElement.style.animationDuration = `${pageLoadTime}ms`;
}