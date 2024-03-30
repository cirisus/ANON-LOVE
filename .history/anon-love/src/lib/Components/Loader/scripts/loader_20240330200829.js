export const pageLoadListener = {
    onDOMContentLoaded: function(callback) {
        document.addEventListener('DOMContentLoaded', function() {
            callback(10);
        });
    },
    onLoad: function(callback) {
        window.addEventListener('load', function() {
            callback(60);
        });
    },
    onBeforeUnload: function(callback) {
        window.addEventListener('beforeunload', function() {
            callback(90);
        });
    },
    onUnload: function(callback) {
        window.addEventListener('unload', function() {
            callback(100);
        });
    }
};

export function showLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'block';
    }
}

export function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
}