//devour
$(function () {
    $(".dbtn").on("click", function (event) {
        var id = $(this).data("id");
        var newDState = {
            devoured: true,
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDState,
        }).then(function () {
            location.reload();
        });
    });

    //add burger
    $(".addBurger").on("click", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(function () {
            location.reload();
        });
    });

    //delete
    $(".deleteButton").on("click", function (event) {
        event.preventDefault();

        $.ajax("/api/burgers/all", {
            type: "DELETE",
        }).then(function () {
            location.reload();
        });
    });
});