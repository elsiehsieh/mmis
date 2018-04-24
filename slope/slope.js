$(document).ready(function() {
    $("#eventSelect").change(function() {
        $("img.show").attr("src", "img/" + $("#eventSelect").val() + ".png");
    });
});
$(document).ready(function() {
    $("#displayTypeSelect").change(function() {
        $("img.show").attr("src", "img/" + $("#displayTypeSelect").val() + ".png");
        if ($(this).val() == "facility") {
            //如果選設施要出現第三層選單
            $(".facilitySelectDiv").css("display", "inline");
            $(".waterSelectDiv").css("display", "none");
            $("img.show").attr("src", "img/" + $("#facilitySelect").val() + ".png");
        } else if ($(this).val() == "water") {
            $(".facilitySelectDiv").css("display", "none");
            $(".waterSelectDiv").css("display", "inline");
            $("img.show").attr("src", "img/" + $("#waterSelect").val() + ".png");
        } else {
            $(".facilitySelectDiv").css("display", "none");
            $(".waterSelectDiv").css("display", "none");
        }
    });
});
$(document).ready(function() {
    //依據選取的option更改讀取的圖片路徑
    $("#facilitySelect").change(function() {
        $("img.show").attr("src", "img/" + $("#facilitySelect").val() + ".png");
    });
});
$(document).ready(function() {
    $("#waterSelect").change(function() {
        $("img.show").attr("src", "img/" + $("#waterSelect").val() + ".png");
    });
});