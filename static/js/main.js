var led_user_control = true;
var ventilation_user_control = true;
var heater_user_control = true;
var selection_miniguages = -1;

$(document).ready(function () {
    document.getElementById('camera_link').href = window.location.protocol + "//" + window.location.hostname + ":1000/html/";
});

$( function() {
    var handle = $( "#custom-handle" );
    $("#slider").slider({
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
        animate: "slow",
      slide: function( event, ui ) {
        handle.text( ui.value );
        $.getJSON('/_max7314setPWM1', {
            pwm1: $(this).slider("value")},
        function(data) {
          $("#result").text(data.result);
        });
      },
       start: function (event, ui) {
       allowSlicerUpdate = false
       },
        stop: function (event, ui) {
        allowSlicerUpdate = true
        }

    });
  } );


