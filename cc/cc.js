$(document).ready(function () {
    $("#displayTypeSelect").change(function () {
        $("img.show.ty-ra").attr("src", "img/" + $("#eventSelect").val() + $("#displayTypeSelect").val() + ".gif");
    });
});
$(document).ready(function () {
    $("#eventSelect").change(function () {
        $("img.show.ty-ra").attr("src", "img/" + $("#eventSelect").val() + $("#displayTypeSelect").val() + ".gif");
    });
});
$(document).ready(function () {
    $("#eventSelect").change(function () {
        $("img.show.total-rain").attr("src", "img/" + $("#eventSelect").val() + "_totalrain.png");
    });
});