$(document).ready(function () {
    $(".buttonMenu").hide();
    $(".img-display").hide();

    $("#selectDisplay").change(function () {
        //控制影片/圖片div顯示隱藏
        if ($("#selectDisplay").val() == "flood") {
            $('.video-display').show();
            $(".img-display").hide();
        } else {
            $('.video-display').hide();
            $(".img-display").show();
        }
        //控制第二層按鈕表單顯示隱藏
        if ($("#selectDisplay").val() == "flood") {
            $(".buttonMenu").hide();
        } else {
            $(".buttonMenu").show();
        }
        //換圖片
        if ($("#selectDisplay").val() == "maximum_depth") {
            $("img.show").attr("src", "img/maximum_depth.png");
        } else {
            $("img.show").attr("src", "img/loss.png");
        }
    });
});