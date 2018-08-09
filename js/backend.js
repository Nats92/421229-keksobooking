"use strict";

(function() {
    var getData = function(url, onLoad, onError) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = "json";

        xhr.addEventListener("load", function() {
            onLoad(xhr.response);
        });
        
        xhr.addEventListener("error", function() {
            onError("Ошибка соединения");
        });

        xhr.addEventListener("timeout", function() {
            onError("Истекло время ожидания запроса");
        })

        xhr.timeout = 10000;
        xhr.open("GET", url);
        xhr.send();
    }
    var postData = function(url, data, onLoad, onError) {
        var formData = new FormData(data);
        var xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.addEventListener("load", function(evt) {
            onLoad(xhr);
        })
        xhr.addEventListener("error", function() {
            onError("Данные не отправлены");
        })
        xhr.open("POST", url);
        xhr.send(formData);
    }


    window.backend = {
        load: getData,
        save: postData
    }
})();
