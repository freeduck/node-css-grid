var dev_css_grid = dev_css_grid || {};
(function(){
    var overlay = window.document.createElement('div');
    overlay.setAttribute('style', 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: grey; opacity: 0.5');
    window.document.appendChild(overlay);
    dev_css_grid.overlay = overlay;
})();
