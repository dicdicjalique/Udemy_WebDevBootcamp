// Check of specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", ".delete", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// Get input from field
$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        // Obtain value and process
        var todoText = $(this).val();
        $("ul").append("<li><span class=\"delete\"><i class=\"far fa-trash-alt\"></i></span> " + todoText + "</li>");

        // Reset value
        $(this).val("");
    }
});

// Fade input in/out when add button is clicked
$("#add").on("click", function() {
    $("input[type='text']").fadeToggle();
});