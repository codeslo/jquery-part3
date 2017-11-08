
var storage;

$(document).ready(function () {

    // insert event handling code here

});

function getPartiers() {
    storage = window.localStorage;
    checkForPartyArray();
}

function checkForPartyArray() {
    if (storage.partyArray) {
        var partyArray = JSON.parse(storage.partyArray);
        addGuestsToTable(partyArray);
        return true;
    } else {
        console.log('no partyArray in local storage');
        return;
    }
}