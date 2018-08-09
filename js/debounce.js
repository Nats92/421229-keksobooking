"use strict";

(function() {  
    window.debounce = function(fc, time) {
        var lastTimeout;
        if (lastTimeout) {
            window.clearTimeout(lastTimeout);
        }
        window.setTimeout(function() {
            fc();
        }, time)
    }  
})();

