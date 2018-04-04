
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var $bgimg = $('.bgimg');
    var $api_key = "AIzaSyAWeZ4XH-hrlimkWR2HzbkX113braxDpLc"
    var $street = $('#street').val()
    var $city = $('#city').val()
    var $google_view_url = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location="+$street +",git "+ $city + "&key="+$api_key

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    $(".bgimg").attr("src",$google_view_url);
    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
