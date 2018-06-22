"use strict";

var announcementTitles = [
    "Большая уютная квартира", 
    "Маленькая неуютная квартира", 
    "Огромный прекрасный дворец", 
    "Маленький ужасный дворец", 
    "Красивый гостевой домик", 
    "Некрасивый негостеприимный домик", 
    "Уютное бунгало далеко от моря", 
    "Неуютное бунгало по колено в воде"
];

var apartmentTypes = [
    "flat", 
    "house", 
    "bungalo"
];
var apartmentTypesLib = {
    flat: "Квартира",  
    house: "Дом",
    bungalo: "Бунгало"
};
var checkInsOuts = [
    "12:00",
    "13:00",
    "14:00"
];

var features = [
    "wifi", 
    "dishwasher", 
    "parking", 
    "washer", 
    "elevator", 
    "conditioner"
]

var choseRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

var makeRandomNums = function(min, max) {
    var nums = [];
    while (nums.length < max) {
        var unrepeat = true;
        var num = choseRandomNumber(min, max - 1); 
        
        nums.forEach(function(it) {
            if (num === it) {
                unrepeat = false;
            }
        })
        if (unrepeat) {
            nums.push(num);    
        }   
    }
    return nums;
}

var mixArray = function(randomize) {
    var randomizedThings = []
    var randomNums = makeRandomNums(0, randomize.length);

    randomize.forEach(function(it, i, arr) {
        randomizedThings.push(arr[randomNums[i]]);
    })
    return randomizedThings;
}  

var mixedTitles = mixArray(announcementTitles);

var makeRandomLengthArr = function(elements) {
    var randomLengthArr = [];
    var mixedElements = mixArray(elements);
    var length = choseRandomNumber(1, elements.length - 1);

    for (var i = 0; i < length; i++) {
        var el = mixedElements[i];
        randomLengthArr.push(el);
    }

    return randomLengthArr;
}

var announcements = [
    {
        author: {
            avatar: "img/avatars/user01.png"
        },

        offer: {
            title: mixedTitles[0],
            getAddress: function() {
                return announcements[0].location.x + "," + announcements[0].location.y
            },
            price: choseRandomNumber(1000, 1000000),
            type: apartmentTypes[choseRandomNumber(0 , apartmentTypes.length - 1)],
            rooms: choseRandomNumber(1, 5),
            guests: choseRandomNumber(1, 30),
            checkin: checkInsOuts[choseRandomNumber(0, checkInsOuts.length - 1)],
            checkout: checkInsOuts[choseRandomNumber(0, checkInsOuts.length - 1)],
            features: makeRandomLengthArr(features),
            description: "",
            photos: []
        },

        location: {
            x: choseRandomNumber(300, 900),
            y: choseRandomNumber(100, 500)
        }
    },
    {
        author: {
            avatar: "img/avatars/user02.png"
        },

        offer: {
            title: mixedTitles[1],
            getAddress: function() {
                return announcements[1].location.x + "," + announcements[1].location.y
            },
            price: choseRandomNumber(1000, 1000000),
            type: apartmentTypes[choseRandomNumber(0 , apartmentTypes.length - 1)],
            rooms: choseRandomNumber(1, 5),
            guests: choseRandomNumber(1, 30),
            checkin: checkInsOuts[choseRandomNumber(0, checkInsOuts.length - 1)],
            checkout: checkInsOuts[choseRandomNumber(0, checkInsOuts.length - 1)],
            features: makeRandomLengthArr(features),
            description: "",
            photos: []
        },

        location: {
            x: choseRandomNumber(300, 900),
            y: choseRandomNumber(100, 500)
        }
    },
    {
        author: {
            avatar: "img/avatars/user03.png"
        },

        offer: {
            title: mixedTitles[2],
            getAddress: function() {
                return announcements[2].location.x + "," + announcements[2].location.y
            },
            price: choseRandomNumber(1000, 1000000),
            type: apartmentTypes[choseRandomNumber(0 , apartmentTypes.length - 1)],
            rooms: choseRandomNumber(1, 5),
            guests: choseRandomNumber(1, 30),
            checkin: checkInsOuts[choseRandomNumber(0, checkInsOuts.length - 1)],
            checkout: checkInsOuts[choseRandomNumber(0, checkInsOuts.length - 1)],
            features: makeRandomLengthArr(features),
            description: "",
            photos: []
        },

        location: {
            x: choseRandomNumber(300, 900),
            y: choseRandomNumber(100, 500)
        }
    },
    {
        author: {
            avatar: "img/avatars/user04.png"
        },

        offer: {
            title: mixedTitles[3],
            getAddress: function() {
                return announcements[3].location.x + "," + announcements[3].location.y
            },
            price: choseRandomNumber(1000, 1000000),
            type: apartmentTypes[choseRandomNumber(0 , apartmentTypes.length - 1)],
            rooms: choseRandomNumber(1, 5),
            guests: choseRandomNumber(1, 30),
            checkin: checkInsOuts[choseRandomNumber(0, checkInsOuts.length - 1)],
            checkout: checkInsOuts[choseRandomNumber(0, checkInsOuts.length - 1)],
            features: makeRandomLengthArr(features),
            description: "",
            photos: []
        },

        location: {
            x: choseRandomNumber(300, 900),
            y: choseRandomNumber(100, 500)
        }
    },
    {
        author: {
            avatar: "img/avatars/user05.png"
        },

        offer: {
            title: mixedTitles[4],
            getAddress: function() {
                return announcements[4].location.x + "," + announcements[4].location.y
            },
            price: choseRandomNumber(1000, 1000000),
            type: apartmentTypes[choseRandomNumber(0 , apartmentTypes.length - 1)],
            rooms: choseRandomNumber(1, 5),
            guests: choseRandomNumber(1, 30),
            checkin: checkInsOuts[choseRandomNumber(0, checkInsOuts.length - 1)],
            checkout: checkInsOuts[choseRandomNumber(0, checkInsOuts.length - 1)],
            features: makeRandomLengthArr(features),
            description: "",
            photos: []
        },

        location: {
            x: choseRandomNumber(300, 900),
            y: choseRandomNumber(100, 500)
        }
    },
    {
        author: {
            avatar: "img/avatars/user06.png"
        },

        offer: {
            title: mixedTitles[5],
            getAddress: function() {
                return announcements[5].location.x + "," + announcements[5].location.y
            },
            price: choseRandomNumber(1000, 1000000),
            type: apartmentTypes[choseRandomNumber(0 , apartmentTypes.length - 1)],
            rooms: choseRandomNumber(1, 5),
            guests: choseRandomNumber(1, 30),
            checkin: checkInsOuts[choseRandomNumber(0, checkInsOuts.length - 1)],
            checkout: checkInsOuts[choseRandomNumber(0, checkInsOuts.length - 1)],
            features: makeRandomLengthArr(features),
            description: "",
            photos: []
        },

        location: {
            x: choseRandomNumber(300, 900),
            y: choseRandomNumber(100, 500)
        }
    },
    {
        author: {
            avatar: "img/avatars/user07.png"
        },

        offer: {
            title: mixedTitles[6],
            getAddress: function() {
                return announcements[6].location.x + "," + announcements[6].location.y
            },
            price: choseRandomNumber(1000, 1000000),
            type: apartmentTypes[choseRandomNumber(0 , apartmentTypes.length - 1)],
            rooms: choseRandomNumber(1, 5),
            guests: choseRandomNumber(1, 30),
            checkin: checkInsOuts[choseRandomNumber(0, checkInsOuts.length - 1)],
            checkout: checkInsOuts[choseRandomNumber(0, checkInsOuts.length - 1)],
            features: makeRandomLengthArr(features),
            description: "",
            photos: []
        },

        location: {
            x: choseRandomNumber(300, 900),
            y: choseRandomNumber(100, 500)
        }
    },
    {
        author: {
            avatar: "img/avatars/user08.png"
        },

        offer: {
            title: mixedTitles[7],
            getAddress: function() {
                return announcements[7].location.x + "," + announcements[7].location.y
            },
            price: choseRandomNumber(1000, 1000000),
            type: apartmentTypes[choseRandomNumber(0 , apartmentTypes.length - 1)],
            rooms: choseRandomNumber(1, 5),
            guests: choseRandomNumber(1, 30),
            checkin: checkInsOuts[choseRandomNumber(0, checkInsOuts.length - 1)],
            checkout: checkInsOuts[choseRandomNumber(0, checkInsOuts.length - 1)],
            features: makeRandomLengthArr(features),
            description: "",
            photos: []
        },

        location: {
            x: choseRandomNumber(300, 900),
            y: choseRandomNumber(100, 500)
        }
    }
];

var makeAvatar = function(src) {
    var avatar = document.createElement("img");
    avatar.classList.add("rounded");
    avatar.setAttribute("src", src);
    avatar.setAttribute("width", 40);
    avatar.setAttribute("height", 40);

    return avatar;
}

var makePin = function(leftCoord, topCoord, avatarSrc) {
    var pin = document.createElement("div");
    pin.classList.add("pin");
    pin.setAttribute("style", "left: " + leftCoord + "px; top: " + topCoord + "px");

    var avatar = makeAvatar(avatarSrc);
    pin.appendChild(avatar);

    return pin;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < announcements.length; i++) {  
    var pin = makePin(announcements[i].location.x, announcements[i].location.y,announcements[i].author.avatar);

    fragment.appendChild(pin);
}

var map = document.querySelector(".tokyo__pin-map");
map.appendChild(fragment);

var lodgeTemplate = document.querySelector("#lodge-template").content.cloneNode(true);

var lodgeTitle = lodgeTemplate.querySelector(".lodge__title");
var lodgeAddress = lodgeTemplate.querySelector(".lodge__address");
var lodgePrice = lodgeTemplate.querySelector(".lodge__price");
var lodgeType = lodgeTemplate.querySelector(".lodge__type");
var lodgeRoomsGuests = lodgeTemplate.querySelector(".lodge__rooms-and-guests");
var lodgeCheckin = lodgeTemplate.querySelector(".lodge__checkin-time");
var lodgeFeatures = lodgeTemplate.querySelector(".lodge__features");
var lodgeDescr = lodgeTemplate.querySelector(".lodge__description");
var lodgePhotos = lodgeTemplate.querySelector(".lodge__photos");
var dialogTitle = document.querySelector(".dialog__title img");

lodgeTitle.textContent = announcements[0].offer.title;
lodgeAddress.textContent = announcements[0].offer.getAddress();
lodgePrice.insertAdjacentHTML("afterbegin", announcements[0].offer.price + "&#x20bd;/ночь");
lodgeType.textContent = apartmentTypesLib[announcements[0].offer.type];
lodgeRoomsGuests.textContent = "Для " + announcements[0].offer.guests + " гостей в " + announcements[0].offer.rooms + " комнатах ";
lodgeCheckin.textContent = "Заезд после " + announcements[0].offer.checkin + " выезд до " + announcements[0].offer.checkout;

var makeMarking = function(items) {
    var totalMarking = "";
    for (var i = 0; i < items.length; i++) {
        totalMarking += '<span class="feature__image feature__image--' + items[i] + '"></span>';
    }
    return totalMarking;
};
lodgeFeatures.insertAdjacentHTML("afterbegin", makeMarking(announcements[0].offer.features)); 

lodgeDescr.textContent = announcements[0].offer.description;
dialogTitle.setAttribute("src", announcements[0].author.avatar);


var clearContainer = function(container) {
    var allChildren = container.children;    
    for (var i = allChildren.length - 1; i >=0 ; i--) {
        container.removeChild(allChildren[i]);
    } 
}
console.log(lodgeTemplate);
var dialogPanel = document.querySelector(".dialog__panel");
clearContainer(dialogPanel);
dialogPanel.appendChild(lodgeTemplate);
