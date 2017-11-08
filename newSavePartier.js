
  function savePartier() {
    var first = $("#first_name").val();
    var last = $("#last_name").val();
    var email = $("#user_email").val();
    var phone = $("#phone_number").val();
    var message = $("#message").val();
    var attending = false;
    if ($("#rsvp-yes").prop("checked")) {
        attending = true;
    }

    var newPartier = new Partier(first, last, email, phone, message, attending);

    var storage = window.localStorage;

    if(!storage.partyArray){
        var newArray = JSON.stringify([]);
        storage.setItem('partyArray',newArray);
    }

    var partyArray = JSON.parse(storage.partyArray);
    partyArray.push(newPartier);
    partyArray = JSON.stringify(partyArray);
    storage.setItem('partyArray',partyArray);

    alert("RSVP Saved!");

}