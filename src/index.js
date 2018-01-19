import PDBeTrack from './pdbe-track';

const loadComponent = function() {
    customElements.define('pdbe-track', PDBeTrack);
};
// Conditional loading of polyfill
if (window.customElements) {
    loadComponent();
} else {
    document.addEventListener('WebComponentsReady', function() {
        loadComponent();
    });
}


export default PDBeTrack;
