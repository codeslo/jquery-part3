$(document).ready(function () {
    $("#submit-button").click(function () {
        // valid must remain true for submit to complete. Any error should change it to false.
        var valid = true;
        $(".validate-this").each(function () {
            var hasVal = $(this).val();
            var fieldName = $(this).attr("data-fieldname");
            if (!hasVal) {
                valid = false;
                $(this).css("background-color", "pink");
                $(this).attr("placeholder", fieldName + " is required.");
            } else {
                if (!isValid($(this).attr("name"))) {
                    valid = false;
                }
            }

            
        });

        if($("#rsvp-yes").prop("checked") === false && $("#rsvp-no").prop("checked") === false){
            
            alert("Are you coming or not? Don't forget to check a box!");
            valid = false;
        }

        if(valid){
            // if valid is true after all checks, submit form
            savePartier();
        }
    });

    $("input").click(function () {
        var hasPlaceholder = $(this).attr("placeholder");
        if (hasPlaceholder) {
            $(this).attr("placeholder", "");
            $(this).css("background-color", "white");
        }

    });

    $("#clear-button").click(function(){
        localStorage.clear();
        console.log(localStorage);
    });

    function isValid(fieldName) {
        var fieldValue = $("input[name=" + fieldName + "]").val();
        var lettersOnly = new RegExp(/[a-zA-Z]{2}/g);
        var checkPhoneNumber = new RegExp(/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);
        var checkEmail = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
        if (fieldName === "firstName" || fieldName === "lastName") {
            if (!lettersOnly.test(fieldValue)) {
                showValidationError(fieldName, "Letters only, min-length = 2");
                return;
            }else{
                return true;
            }
        } else if (fieldName === "phoneNumber") {
            if (!checkPhoneNumber.test(fieldValue)) {
                showValidationError(fieldName, "Invalid phone number");
                return;
            }else{
                return true;
            }
        } else if (fieldName === "userEmail") {
            if (!checkEmail.test(fieldValue)) {
                showValidationError(fieldName, "Invalid email address");
                return;
            }else{
                return true;
            }
        }
    }

    function showValidationError(fieldName, errorText) {
        var field = $("input[name=" + fieldName + "]");
        $(field).val("");
        $(field).css("background-color", "pink");
        $(field).attr("placeholder", errorText);
    }

    function Partier(first, last, email, phone, message, attending) {
        this.firstName = first;
        this.lastName = last;
        this.email = email;
        this.phoneNumber = phone;
        this.message = message;
        this.attending = attending;
        this.fullName = this.firstName + " " + this.lastName;
    }

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

        var result = JSON.stringify(newPartier);

        var storage = window.localStorage;
        storage.setItem(newPartier.fullName,result);

        alert("RSVP Saved!");

    }
});