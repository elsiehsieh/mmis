$(document).ready(function () {
    $("#eventSelect").change(function () {
        $("img.show").attr("src", "img/" + $("#eventSelect").val() + ".png");
    });
});