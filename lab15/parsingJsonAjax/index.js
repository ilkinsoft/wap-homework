$(document).ready(function () {

    $("button").click(function () {
        $("#div1").empty();
        $.ajax(
            {
                url: "http://jsonplaceholder.typicode.com/users",
                success: function (result) {
                    let i = 0;
                    $.each(result, function () {
                        const pTag = "<p id='" + result[i].id + "' onclick='func(" + result[i].id + ")'>" + result[i].name + "</p>";
                        $("#div1").append(pTag);
                        i++;
                    });
                }
            });
    });

});

function func(userId) {
    $('.article').remove();
    $.ajax(
        {
            url: "http://jsonplaceholder.typicode.com/posts?userId=" + userId, // $(this).attr('href'),
            success: function (result) {
                let i = 0;
                $.each(result, function () {
                    $("#" + userId).after("<p class='article' style='color:blue; background-color: lightgray;'>" + result[i].title + "</p>");
                    i++;
                });
            }
        });
};