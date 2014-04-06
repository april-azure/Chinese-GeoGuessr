function random_intro_header() {
    var random = Math.floor(Math.random() * 4 + 1);
    var pic_name = "intro-bg" + random + ".jpg";
    $(document).ready(function() {
        $('.intro-header').css({
            "background": "url(./img/" + pic_name + ") no-repeat center center",
            "background-size": "cover"
        });
    });
}
var init = function() {
    pano_container = document.getElementById('PanoCtn'); //街景容器
    pano = new qq.maps.Panorama(pano_container, {
        pano: '10011501120802180635300', //场景ID
        pov: { //视角
            heading: 1, //偏航角
            pitch: 0 //俯仰角
        },
        zoom: 1 //缩放
    })
    
    var center = new qq.maps.LatLng(39.908714, 116.397384);
    var map = new qq.maps.Map(document.getElementById("map_example"), {
        center: center,
        zoom: 16
    });
    setTimeout(function() {
        var marker = new qq.maps.Marker({
            position: center,
            animation: qq.maps.MarkerAnimation.DROP,
            map: map
        });
    }, 500);
}
random_intro_header();