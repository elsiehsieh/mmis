// $(function () {
//     $('#colorselector').change(function () {
//         $('.colors').hide();
//         $('#' + $(this).val()).show();
//     });
// });
$(document).ready(function () {
    $("#selectDisplay").change(function () {
        $("img").attr("src", "img/" + $("#selectDisplay").val() + ".mp4");
    });
});