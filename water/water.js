$(document).ready(function() {
    $("#selectScenario").change(function() {
        if ($(this).val() == "statistical_downscaling") {
            $('#selectYear').attr('disabled', false);
            $('#selectDisplay').attr('disabled', true);
            $('#selectLocation').attr('disabled', true);
            // $("img.show").attr("src", "img/" + $("#selectDisplay").val() + ".png");
            $(".statistical.container").css("display", "block");
            $(".default.container").css("display", "none");
        } else {
            $('#selectYear').attr('disabled', true);
            $('#selectDisplay').attr('disabled', false);
            $('#selectLocation').attr('disabled', false);
            $(".statistical.container").css("display", "none");
            $(".default.container").css("display", "block");
        }
    });



    $("#selectYear").change(function() {

        if ($(this).val() == "near_future") {
            $('#selectDisplay').attr('disabled', false);
            $('#selectLocation').attr('disabled', false);
            console.log($("#selectLocation").val());
            $("#selectLocation").find('option:selected').removeAttr("selected");
            // $('select[id*="selectDisplay"] option[value="public_water"]').attr('selected', true);
            $('select[id*="selectLocation"] option[value="public_taipei"]').attr('selected', true);
            $('select[id*="selectLocation"] option[value^="public"]').show();
            $('select[id*="selectLocation"] option[value="public_taipei-banshin-taoyuan"]').hide();
            $('select[id*="selectLocation"] option[value*="ag"]').hide();
            $(".statistical.container .show.left").attr("src", "img/near_future_" + $('#selectLocation').val() + ".png");
            $('.statistical.container .card-text').text(text['text_' + $('#selectLocation').val()]);
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
            $("#selectDisplay").change(function() {
                if ($(this).val() == "public_water") {
                    //公共用水

                    console.log($("#selectLocation").val());
                    // $("#selectLocation").find('option:selected').removeAttr("selected");
                    // $('select[id*="selectLocation"] option[value="public_taipei"]').attr('selected', true);
                    $('select[id*="selectLocation"] option[value^="public"]').show();
                    $('select[id*="selectLocation"] option[value="public_taipei-banshin-taoyuan"]').hide();
                    $('select[id*="selectLocation"] option[value*="ag"]').hide();

                    $(".statistical.container .show.left").attr("src", "img/near_future_" + $("#selectLocation option:selected").val() + ".png ");
                    $('.statistical.container .card-text').text(text['text_' + $('#selectLocation').val()]);
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
                    //農業用水
                    console.log($("#selectLocation").val())
                    $("#selectLocation").find('option:selected').removeAttr("selected");
                    $('select[id*="selectLocation"] option[value^="public"]').hide();
                    $('select[id*="selectLocation"] option[value*="ag"]').show();
                    $('select[id*="selectLocation"] option[value="ag_shimen"]').attr('selected', true);
                    $(".statistical.container .show.left").attr("src", "img/ag_shimen.png");
                    $('.statistical.container .card-text').text(text['text_' + $('#selectLocation').val()]);
                    $("#selectLocation").change(function() {
                        $(".statistical.container .show.left").attr("src", "img/" + $('#selectLocation').val() + ".png");
                        if ($("#selectLocation").val() == "ag_shimen") {
                            $('.statistical.container .card-text').text(text.text_ag_shimen);
                        } else {
                            $('.statistical.container .card-text').text(text.text_ag_taoyuan);
                        }
                    });
                }
            });

        } else {
            $('select[id*="selectDisplay"] option[value="public_water"]').attr('selected', true);
            $('select[id*="selectLocation"] option[value="public_taipei"]').attr('selected', true);
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
    text_base: "現況臺北缺水率為0，板新與桃園地區在枯水期有些微缺水，但均在容許範圍。臺北SI缺水指數設計標準為0 .1， 板新與桃園設計標準為0 .5， 結果顯示均在設計範圍內。",
    text_ag_shimen: "一期作開始時間為春季，正好是灌溉需水量較高但水源較為不足的時期，因此春季有較高缺水率。但此模擬乃使用農業灌溉水權量作為需水量進行模擬，實際需水量會因為灌溉計畫有所變動，較實際水權量小，因此實際缺水率應比模擬結果小。近未來氣候變遷可能造成缺水率降低， 但仍有GCM結果顯示近未來缺水率會增加(HadGEM2 - CC)。",
    text_ag_taoyuan: "一期作開始時間為春季，正好是灌溉需水量較高但水源較為不足的時期，因此春季有較高缺水率。但此模擬乃使用農業灌溉水權量作為需水量進行模擬，實際需水量會因為灌溉計畫有所變動，較實際水權量小，因此實際缺水率應比模擬結果小。近未來氣候變遷可能造成缺水率降低， 但仍有GCM結果顯示近未來缺水率會增加(HadGEM2 - CC)。"
};