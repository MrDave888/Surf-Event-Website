 google.maps.event.addDomListener(window, 'load', init);

function init() {
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(-38.100, 144.2648),
    styles: [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#426487"}]},
      {"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20}]},
      {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":-31},{"lightness":-33},
      {"weight":2},{"gamma":0.8}]},
      {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
      {"featureType":"administrative","elementType":"all","stylers":[{"hue":"#37ff00"},
      {"visibility":"simplified"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"simplified"}]},
      {"featureType":"landscape","elementType":"all","stylers":[{"hue":"#0080ff"},
      {"lightness":"60"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},
      {"saturation":30}]},
      {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
      {"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},
      {"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},
      {"saturation":-20}]},
      {"featureType":"road","elementType":"all","stylers":[{"hue":"#0080ff"},
      {"visibility":"simplified"}]},
      {"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},
      {"saturation":-30},
      {"visibility":"simplified"}]},
      {"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},
      {"lightness":25}]},
      {"featureType":"water","elementType":"all","stylers":[{"lightness":-20}]}]
  };
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
  var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(-38.3653, 144.2648),
                    map: map,
                    title: 'Bells Beach',
                    icon: '../images/ios7-location50.png'
                });

}
