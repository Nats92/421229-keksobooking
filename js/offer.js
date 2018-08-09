"use strict";
(function() {
    var offer = {
        apartmentTypesLib: {
            flat: "Квартира",  
            house: "Дом",
            bungalo: "Бунгало",
            palace: "Дворец",
            any: "Любой тип жилья"
        },
        card: {
            makeFeaturesMarking: function(items) {
                var marking = "";
                for (var i = 0; i < items.length; i++) {
                    marking += "<span class=\"feature__image feature__image--" + items[i] + "\"></span>";
                }
                return marking;
            },
            makePhotosMarking: function(photosArr) {
                var marking = document.createDocumentFragment();

                for (var i = 0; i < photosArr.length; i++) {
                    var photo = document.createElement("img");
                    photo.setAttribute("src", photosArr[i]);
                    photo.setAttribute("width", "52");
                    photo.setAttribute("height", "42");
                    photo.setAttribute("alt", "lodge photo");
                    marking.appendChild(photo); 
                }
                return marking;
            },
            createCard: function(it) {
                var lodgeTemplate = document.querySelector("#lodge-template").content;
                var card = lodgeTemplate.cloneNode(true)
                var title = card.querySelector(".lodge__title");
                var address = card.querySelector(".lodge__address");
                var price = card.querySelector(".lodge__price");
                var type = card.querySelector(".lodge__type");
                var roomsGuests = card.querySelector(".lodge__rooms-and-guests");
                var checkin = card.querySelector(".lodge__checkin-time");
                var features = card.querySelector(".lodge__features");
                var descr = card.querySelector(".lodge__description");
                var photos = card.querySelector(".lodge__photos");

                title.textContent = it.offer.title;
                address.textContent = it.offer.address;
                price.insertAdjacentHTML("afterbegin", it.offer.price + "&#x20bd;" + "/ночь");
                type.textContent = offer.apartmentTypesLib[it.offer.type];
                roomsGuests.textContent = "Для " + it.offer.guests + " гостей в " + it.offer.rooms + " комнатах ";
                checkin.textContent = "Заезд после " + it.offer.checkin + " выезд до " + it.offer.checkout;
                features.insertAdjacentHTML("afterbegin", offer.card.makeFeaturesMarking(it.offer.features)); 
                descr.textContent = it.offer.description;
                photos.appendChild(offer.card.makePhotosMarking(it.offer.photos));

                return card;
            },
            onCardOpen: function(card) {
                var dialog = document.querySelector("#offer-dialog");
                var closeButton = dialog.querySelector(".dialog__close");
                var dialogPanel = dialog.querySelector(".dialog__panel");

                dialog.classList.remove("hidden");
                dialog.removeChild(dialogPanel);
                dialog.appendChild(card);

                window.addEventListener("keydown", function(evt) {
                    if (evt.keyCode === 27) {
                        offer.card.onCardClose(evt, dialog, closeButton);
                    }
                })
                closeButton.addEventListener("click", function(evt) {
                    offer.card.onCardClose(evt, dialog, closeButton);
                });
            },
            onCardClose: function(evt, container, button) {
                container.classList.add("hidden");
                button.removeEventListener(evt.type, offer.card.onCardClose);
            },
            setAvatar: function(path) {
                var dialogImg = document.querySelector(".dialog__title img"); 
                dialogImg.setAttribute("src", path);
            }
        },
        pin: {
            makePinAvatar: function(src) {
                var avatar = document.createElement("img");
                avatar.classList.add("rounded");
                avatar.setAttribute("src", src);
                avatar.setAttribute("width", 40);
                avatar.setAttribute("height", 40);

                return avatar;
            },
            makePin: function(it) {
                var pin = document.createElement("div");
                pin.classList.add("pin");
                pin.setAttribute("style", "left: " + it.location.x + "px; top: " + it.location.y + "px");

                var avatar = offer.pin.makePinAvatar(it.author.avatar);
                pin.appendChild(avatar);

                return pin;
            },
            responsePins: function() {
                var url = "https://js.dump.academy/keksobooking/data";
                var onLoad = function(data) {
                    window.pins = data;
                    window.updateForm();
                }
                var onError = function(message) {
                    var page = document.querySelector("body");
                    var container = document.createElement("div");
                    container.classList.add("error-modal-container");
                    var errorModal = document.createElement("div");
                    errorModal.classList.add("error-modal");
                    var messageTag = document.createElement("p");
                    var closeModal = document.createElement("button");
                    closeModal.insertAdjacentHTML("afterbegin", "ОК");
                    closeModal.addEventListener("click", function() {
                        page.removeChild(container);
                    })
                    messageTag.insertAdjacentHTML("afterbegin", message);
                    errorModal.appendChild(messageTag);
                    errorModal.appendChild(closeModal);
                    container.appendChild(errorModal);
                    page.appendChild(container);
                }
                window.backend.load(url, onLoad, onError);
            },
            drawPins: function(data, amount) {
                var map = document.querySelector(".tokyo__pin-map");
                window.util.clearContainer(map);

                var elemsAmount = data.length > amount ? amount : data.length;
                var fragment = document.createDocumentFragment();
                
                for (var i = 0; i < elemsAmount; i++) {
                    var pin = offer.pin.makePin(data[i]);
                    offer.pin.onPinClick(pin, data[i]); 
                    fragment.appendChild(pin); 
                }

                map.appendChild(fragment);
            },
            onPinClick: function(el, data) {
                el.addEventListener("click", function(evt) {
                    var card = offer.card.createCard(data);
                    offer.card.setAvatar(data.author.avatar);
                    offer.card.onCardOpen(card);         
                });
            }
        }
    }

    window.pin = {
        onPinClick: offer.pin.onPinClick,
        drawPins: offer.pin.drawPins,
    }

    window.pins = [];
    window.addEventListener("load", offer.pin.responsePins);
})()