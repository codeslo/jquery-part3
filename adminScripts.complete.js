var storage;

$(document).ready(function () {
    $('.edit-btn').on('click', (function () {
        $(this).closest('tr').find('td').attr('contenteditable', 'true').css('background-color', 'yellow');
        $(this).closest('tr').find('td:first').attr('contenteditable', 'false').css('background-color','white');
        $(".edit-message").css('visibility', 'visible');
    }));

    $('.save-btn').on('click', (function () {
        var row = $(this).closest('tr');
        row.find('td').attr('contenteditable', 'false').css('background-color', 'white');
        $(".edit-message").css('visibility', 'hidden');

        var id = row.find("td:eq(0)").text();

        var partyArray = JSON.parse(storage.partyArray);
        var partier = partyArray[id];
        partier.firstName = row.find("td:eq(1)").text();
        partier.lastName = row.find("td:eq(2)").text();
        partier.email = row.find("td:eq(3)").text();
        partier.phoneNumber = row.find("td:eq(4)").text();
        partier.message = row.find("td:eq(5)").text();
        partier.attending = row.find("td:eq(6)").text();
        partier.fullName = partier.firstName + " " + partier.lastName;
        writeToLocalStorage(partyArray);
        location.reload();
    }));

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

function addGuestsToTable(partyArray) {
    partyArray.forEach(function (e,i) {
        $('#partyTable tr:last').after('<tr>');
        $('#partyTable tr:last').append('<td>'+i+'</td>');
        for (var key in e) {
            $('#partyTable tr:last').append(
                "<td>" + e[key] + "</td>"
            )
        }
        $("#partyTable tr:last").append("<td><button class='edit-btn'>Edit</button></td><td><button class='save-btn'>Save</button></td>");
    });
}

function writeToLocalStorage(arr){
    storage.setItem("partyArray",JSON.stringify(arr));
}