export function createSlider(sliderElement, nodes = 5) {
    let value = 1;
    let content = 'Content 1';
    let thumb;
    let dragging = false;

    function updateContent() {
        content = 'Content ' + value;
    }

    thumb = sliderElement.querySelector('.thumb');
    sliderElement.addEventListener('mousedown', startDrag);
    sliderElement.addEventListener('mousemove', drag);
    sliderElement.addEventListener('mouseup', endDrag);
    sliderElement.addEventListener('mouseleave', endDrag);

    function startDrag(e) {
        if (e.target === thumb) {
            dragging = true;
            thumb.style.transition = 'none';
        } else {
            moveThumb(e);
        }
    }

    function drag(e) {
        if (dragging) {
            moveThumb(e);
        }
    }

    function endDrag() {
        if (dragging) {
            dragging = false;
            thumb.style.transition = 'left 0.2s'; // Add transition back
        }
    }

    function moveThumb(e) {
        let rect = sliderElement.getBoundingClientRect();
        let x = e.clientX - rect.left; // x position within the element
        let width = rect.right - rect.left;
        let position = x / width;
        position = Math.max(0, Math.min(1, position)); // Ensure position is between 0 and 1
        let newValue = Math.round(position * (nodes - 1)) + 1;

        thumb.style.left = position * 100 + '%';

        if (newValue !== value) {
            value = newValue;
            updateContent();
        }
    }

    return {
        getValue: () => value,
        getContent: () => content
    };
}