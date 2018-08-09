
"use strict";

(function() { 
    var filterForm = document.forms["filter-form"];

    var housingType = filterForm.elements["housing_type"];
    var housingPrice = filterForm.elements["housing_price"];
    var housingRoomAmount = filterForm.elements["housing_room-number"];
    var housingGuestsAmount = filterForm.elements["housing_guests-number"];
    var housingFeatures = filterForm.elements["feature"];

    var type = housingType.value;
    var price = housingPrice.value;
    var roomsAmount = housingRoomAmount.value;
    var guestsAmount = housingGuestsAmount.value;

    var features = [
        "wifi",
        "dishwasher",
        "parking",
        "washer",
        "elevator",
        "conditioner"
    ]

    window.updateForm = function() {
        type = housingType.value;
        price = housingPrice.value;
        roomsAmount = Number(housingRoomAmount.value);
        guestsAmount = Number(housingGuestsAmount.value);
        housingFeatures = Array.from(filterForm.elements["feature"]);

        var housingFeaturesChecked = housingFeatures
        .filter(function(it) {
            return it.checked;
        })
        .map(function(it) {
            return it.value;
        });

        var filtered = window.pins.slice();
        if (type !== "any") {
            filtered = filtered.filter(function(pin) {
                return pin.offer.type === type;
            })
        }

        filtered = filtered.filter(function(pin) {
            var c = [];

            pin.offer.features.forEach(function(it) {
                for (var i = 0; i < housingFeaturesChecked.length; i++) {
                    if (it === housingFeaturesChecked[i]) {
                        c.push(it);
                        break;
                    }
                }
            })

            if (c.length === housingFeaturesChecked.length) {
                return pin;
            }
        })

        var minPrice = 0;
        var maxPrice = Infinity;
        if (price === "low") {
            maxPrice = 10000;
        }
        if (price === "high") {
            minPrice = 50000;
        }
        if (price === "middle") {
            minPrice = 10000;
            maxPrice = 50000;
        }
        
        filtered = filtered.filter(function(pin) {
            return pin.offer.price > minPrice && pin.offer.price < maxPrice;
        })

        if (!isNaN(roomsAmount)) {
            filtered = filtered.filter(function(pin) {
                return pin.offer.rooms === roomsAmount;
            })
        }

        if (!isNaN(guestsAmount)) {
            filtered = filtered.filter(function(pin) {
                return pin.offer.guests === guestsAmount;
            })
        }

        window.pin.drawPins(filtered, 5);
    }

    filterForm.addEventListener("change", function() {
        window.debounce(window.updateForm, 500);
    });
})();