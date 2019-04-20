$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
            "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    var guestList = '';
    $.each(data, function (key, value) {
        guestList += ('<p>' + value.first + ' ' + value.last + '</p>');
    });
    $("#guestList").html(guestList);
}