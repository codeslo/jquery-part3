// edit button event binder
$('.edit-btn').on('click', (function () {
    $(this).closest('tr').find('td').attr('contenteditable', 'true').css('background-color', 'yellow');
    $(this).closest('tr').find('td:first').attr('contenteditable', 'false').css('background-color','white');
    $(".edit-message").css('visibility', 'visible');
}));

//save button event binder
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