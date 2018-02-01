// $(function () {
//     $('#colorselector').change(function () {
//         $('.colors').hide();
//         $('#' + $(this).val()).show();
//     });
// });
$(document).ready(function () {
    $("#selectDisplay").change(function () {
        if ($("#selectDisplay").val() == "flood") {
            $(".buttonMenu").css("display", "none");
            $(".img").css("display", "none");
            $(".video").css("display", "block");
        } else if ($("#selectDisplay").val() == "maximum_depth") {
            $(".buttonMenu").css("display", "block");
            $(".img").css("display", "block");
            // $(".img").attr("src", "img/maximum_depth.png");
            // $(".video").hide();
        } else {
            $(".buttonMenu").css("display", "block");
            $(".img").css("display", "block");
            $(".img").attr("src", "img/loss.png");
            $(".video").css("display", "none");
        }
    });
});