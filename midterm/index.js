$(document).ready(function () {

    $("#bookingForm").submit(function (event) {

        event.preventDefault();
        $('#errorBox').empty();
        let submitFlag = true;

        if ($('#txtSeatCount').val() <= 0) {
            $('#errorBox').append('Seats must greater than 0. <br>');
            submitFlag = false;
        }
        else if ($('#txtSeatCount').val() > 200) {
            $('#errorBox').append('You can not book more than 200 seats. <br>');
            submitFlag = false;
        }

        if (!$('input[name="taxi"]:checked').val()) {
            $('#errorBox').append('You must select taxi type. <br>');
            submitFlag = false;
        }
        if (!$('input[name="extras"]:checked').val()) {
            $('#errorBox').append('You must check at least 1 extra. <br>');
            submitFlag = false;
        }

        if (submitFlag)
            this.submit();
    })
});