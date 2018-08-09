"use strict";

(function() {  
    window.util = {
        clearContainer: function(container) {
            var allChildren = container.children;    
            for (var i = allChildren.length - 1; i >=0 ; i--) {
                container.removeChild(allChildren[i]);
            } 
        }
    }  
})();

