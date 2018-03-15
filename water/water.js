// $(document).ready(function() {
//     $("#selectDisplay").change(function() {
//         $("img.show").attr("src", "img/" + $("#selectDisplay").val() + ".png");
//     });
// });

//#selectScenario選擇none，剩下三個select都disabled，呈現首頁圖
//row1 img 左7右5 row2說明
//#selectScenario選擇statistical_downscaling，移除select disabled
//.show.left img/base.png
//隱藏row2說明
//隱藏.show.right圖片
//顯示.
$(document).ready(function() {
    $("#selectScenario").change(function() {
        if ($(this).val() == "statistical_downscaling") {
            $('#selectYear').attr('disabled', false);
            $('#selectDisplay').attr('disabled', false);
            $('#selectLocation').attr('disabled', false);
            // $("img.show").attr("src", "img/" + $("#selectDisplay").val() + ".png");
            $(".statistical.container").css("display", "block");
            $(".default.container").css("display", "none");
        } else {
            $('#selectYear').attr('disabled', true);
            $('#selectDisplay').attr('disabled', true);
            $('#selectLocation').attr('disabled', true);
            $(".statistical.container").css("display", "none");
            $(".default.container").css("display", "block");
        }
    });
});