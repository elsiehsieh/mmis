// $(function () {
//     $('#colorselector').change(function () {
//         $('.colors').hide();
//         $('#' + $(this).val()).show();
//     });
// });
$(document).ready(function () {
    $(".buttonMenu").hide();
    $(".imgSection").hide();

    $("#selectDisplay").change(function () {
        //控制影片/圖片div顯示隱藏
        if ($("#selectDisplay").val() == "flood") {
            $('.videioSection').show();
            $(".imgSection").hide();
        } else {
            $('.videioSection').hide();
            $(".imgSection").show();
        }
        //控制第二層按鈕表單顯示隱藏
        if ($("#selectDisplay").val() == "flood") {
            $(".buttonMenu").hide();
        } else {
            $(".buttonMenu").show();
        }
        //換圖片
        if ($("#selectDisplay").val() == "maximum_depth") {
            $("img").attr("src", "img/maximum_depth.png");
        } else {
            $("img").attr("src", "img/loss.png");
        }
    });
});