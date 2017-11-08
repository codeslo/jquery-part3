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