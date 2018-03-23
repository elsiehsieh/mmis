$(document).ready(function() {

    var selectYearOptions = "";
    var selectDisplayOptions = "";
    var selectLocationOptions = "";

    $("#selectScenario").on("change", function() {
        console.log("選擇情境");
        var value = $(this).val();
        if (value == "statistical_downscaling") {
            selectYearOptions =
                "<option>請選擇</option>" +
                "<option value='base'>基期(1986~2005)</option>" +
                "<option value='near_future'>近未來(2016~2035)</option>";
            $("#selectYear").html(selectYearOptions);
            $(".statistical.container").css("display", "block");
            $(".default.container").css("display", "none");

        } else {
            $(".statistical.container").css("display", "none");
            $(".default.container").css("display", "block");

            $("#selectYear")
                .find("option")
                .remove();
            $("#selectDisplay")
                .find("option")
                .remove();
            $("#selectLocation")
                .find("option")
                .remove();
        }
    });

    $("#selectYear").on("change", function() {
        var value = $(this).val();
        if (value == "base") {
            selectDisplayOptions =
                "<option selected='selected' value='public_water'>公共用水</option>";
            $("#selectDisplay").html(selectDisplayOptions);
            selectLocationOptions =
                "<option selected='selected' value='public_taipei-banshin-taoyuan'>臺北、板新、桃園</option>";
            $("#selectLocation").html(selectLocationOptions);
            $(".statistical.container .show.left").attr("src", "img/base_left.png");
            $('.statistical.container .card-text').text(text.text_base);
        } else if (value == "near_future") {
            $("#selectLocation")
                .find("option")
                .remove();
            selectDisplayOptions =
                "<option>選擇主題成果</option>" +
                "<option value='public_water'>公共用水</option>" +
                "<option value='ag_water'>農業用水</option>";
            $("#selectDisplay").html(selectDisplayOptions);
        } else {
            $("#selectDisplay")
                .find("option")
                .remove();
            $("#selectLocation")
                .find("option")
                .remove();
        }
    });

    $("#selectDisplay").on("change", function() {
        var value = $(this).val();
        if (value == "public_water") {
            selectLocationOptions =
                "<option>選擇區域</option>" +
                "<option value='public_taipei'>臺北</option>" +
                "<option value='public_banshin'>板新</option>" +
                "<option value='public_taoyuan'>桃園</option>";
            $("#selectLocation").html(selectLocationOptions);
        } else if (value == "ag_water") {
            selectLocationOptions =
                "<option>選擇區域</option>" +
                "<option value='ag_shimen'>石門灌區</option>" +
                "<option value='ag_taoyuan'>桃園灌區</option>";
            $("#selectLocation").html(selectLocationOptions);
        } else {
            $("#selectLocation")
                .find("option")
                .remove();
        }
    });

    $("#selectLocation").on("change", function() {
        var value = $(this).val();
        $(".statistical.container .show.left").attr("src", "img/" + value + ".png");
        $('.statistical.container .card-text').text(text['text_' + value]);
    });

});
var text = {
    text_public_taipei: "臺北地區近未來氣候變遷不影響供水。",
    text_public_banshin: "板新地區主要缺水發生在1月至3月期間，近未來在板新二期計畫啟動之後，缺水率明顯降低，近未來五個GCM結果皆顯示氣候變遷不影響供水。",
    text_public_taoyuan: "桃園地區主要缺水發生在1月至3月期間。",
    text_base: "現況臺北缺水率為0，板新與桃園地區在枯水期有些微缺水，但均在容許範圍。臺北SI缺水指數設計標準為0 .1， 板新與桃園設計標準為0 .5， 結果顯示均在設計範圍內。",
    text_ag_shimen: "一期作開始時間為春季，正好是灌溉需水量較高但水源較為不足的時期，因此春季有較高缺水率。但此模擬乃使用農業灌溉水權量作為需水量進行模擬，實際需水量會因為灌溉計畫有所變動，較實際水權量小，因此實際缺水率應比模擬結果小。近未來氣候變遷可能造成缺水率降低， 但仍有GCM結果顯示近未來缺水率會增加(HadGEM2 - CC)。",
    text_ag_taoyuan: "一期作開始時間為春季，正好是灌溉需水量較高但水源較為不足的時期，因此春季有較高缺水率。但此模擬乃使用農業灌溉水權量作為需水量進行模擬，實際需水量會因為灌溉計畫有所變動，較實際水權量小，因此實際缺水率應比模擬結果小。近未來氣候變遷可能造成缺水率降低， 但仍有GCM結果顯示近未來缺水率會增加(HadGEM2 - CC)。"
};