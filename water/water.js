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



    $("#selectYear").change(function() {
        if ($(this).val() == "near_future") {
            $('#selectDisplay').attr('disabled', false);
            $('#selectLocation').attr('disabled', false);

            $('select[id*="selectLocation"] option[value="public_taipei-banshin-taoyuan"]').hide();
            $('select[id*="selectLocation"] option[value*="ag"]').hide();
            $('select[id*="selectLocation"] option[value="public_taipei"]').attr('selected', true);
            $(".statistical.container .show.left").attr("src", "img/near_future_" + $('#selectLocation').val() + ".png");
            text_var = text.text_ + $('#selectLocation').val();
            $('.statistical.container .card-text').text(text_var);
            $("#selectLocation").change(function() {
                $(".statistical.container .show.left").attr("src", "img/near_future_" + $('#selectLocation').val() + ".png");
                if ($("#selectLocation").val() == "public_banshin") {
                    $('.statistical.container .card-text').text(text.text_public_banshin);
                } else if ($("#selectLocation").val() == "public_taoyuan") {
                    $('.statistical.container .card-text').text(text.text_public_taoyuan);
                } else {
                    $('.statistical.container .card-text').text(text.text_public_taipei);
                }
            });
        } else {
            $('select[id*="selectLocation"] option[value="public_taipei-banshin-taoyuan"]').show();
            $('select[id*="selectLocation"] option[value*="ag"]').show();
            $('#selectDisplay').attr('disabled', true);
            $('#selectLocation').attr('disabled', true);
            $(".statistical.container .show.left").attr("src", "img/base_left.png");
            $('.statistical.container .card-text').text(text.text_base);



        }
    });
});

var text = {
    text_public_taipei: "臺北地區近未來氣候變遷不影響供水。",
    text_public_banshin: "板新地區主要缺水發生在1月至3月期間，近未來在板新二期計畫啟動之後，缺水率明顯降低，近未來五個GCM結果皆顯示氣候變遷不影響供水。",
    text_public_taoyuan: "桃園地區主要缺水發生在1月至3月期間。",
    text_base: "現況臺北缺水率為0，板新與桃園地區在枯水期有些微缺水，但均在容許範圍。臺北SI缺水指數設計標準為0 .1， 板新與桃園設計標準為0 .5， 結果顯示均在設計範圍內。"
};