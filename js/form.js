"use strict";

(function() {
    /* зависимости полей время заезда и время выезда */
    var timeIn = document.querySelector("#timein");
    var timeOut = document.querySelector("#timeout");

    var syncTimeInOut = function(evt, field) {
        var val = evt.target.value;
        field.value = val;
    }

    window.synchronizeFields(timeIn, timeOut, syncTimeInOut);

    /* зависимость типа жилья и стоимости */
    var type = document.querySelector("#type");
    var price = document.querySelector("#price");
    var types = {
        bungalo: {
            name: "Лачуга",
            minPrice: 0
        },
        flat: {
            name: "Квартира",
            minPrice: 1000
        },
        house: {
            name: "Дом",
            minPrice: 5000
        },
        palace: {
            name: "Дворец",
            minPrice: 10000
        }
    }

    var syncPriceAndType = function(evt, field1, field2) {
        var field = evt.target;
        var val = evt.target.value;
        if (field === price) {
            for (var key in types) {
                if (val >= types[key].minPrice) {
                    type.value = key;
                } 
            }
        } else {
            var minPrice = types[val].minPrice;
            price.value = minPrice;
        }
    }
    window.synchronizeFields(type, price, syncPriceAndType);

    /* зависимость количества комнат от кол-ва гостей */
    var guestsField = document.querySelector("#capacity");
    var roomsField = document.querySelector("#room_number");
    var roomsNum = Number(roomsField.value);
    var guestsNum = Number(guestsField.value);
    
    var onRoomsAndGuestsChange = function() {
        roomsNum = Number(roomsField.value);
        guestsNum = Number(guestsField.value);

        if (roomsNum === 100) {
            guestsField.value = 0;
        } 
        if (guestsNum > roomsNum) {
            roomsField.value = guestsNum;

            if (guestsNum === 0) {
                roomsField.value = 100;
            } else {
                roomsField.value = guestsNum;
            }
        } 

    }
    window.synchronizeFields(guestsField, roomsField, onRoomsAndGuestsChange);
    
    var sendForm = function() {
        var form = document.forms.announcement;
        form.addEventListener("submit", function(evt) {
            evt.preventDefault();

            var url = "https://js.dump.academy/keksobooking";
            var onLoad = function(it) {
                form.reset();
            }

            window.backend.save(url, form, onLoad, onError);
        })
    }
    sendForm();
})();

