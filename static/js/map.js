/**
 * Created by Marcin.Gajewski on 27/12/2016.
 */
function initMap() {
        var uluru = {lat: 52.935592, lng:  -1.182389};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

