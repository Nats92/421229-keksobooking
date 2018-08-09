"use strict";

(function() {    
    window.synchronizeFields = function(field1, field2, cb) {
        field1.addEventListener("input", function(evt) {
            cb(evt, field2);
        })
        field2.addEventListener("input", function(evt) {
            cb(evt, field1);
        })
    }
})();


