let scrollBox = document.getElementsByClassName('scroller');
export function dampScroller() {

}
window.addEventListener("dampScroller", dampScroller);
let scrollY = 0;
let minScroll = 10;
window.addEventListener("wheel",() => {
    if(event.deltaY > 0) {
        scrollY += minScroll;
    } else {
        scrollY -= minScroll;
    }
    scroller.style.transform = `translateY(${scrollY}px)`;
});