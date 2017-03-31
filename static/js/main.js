var led_user_control = true;
var ventilation_user_control = true;
var heater_user_control = true;
var selection_miniguages = -1;

$(document).ready(function () {
    document.getElementById('camera_link').href = window.location.protocol + "//" + window.location.hostname + ":1000/html/";
    setInterval(retrieve, 500 );
});

function retrieve() {

     $.getJSON('/_lastRecordSQlite', {
            command: 101},
        function(data) {
        gg1_light.refresh(data.light1_lx);
        gg2_pressure.refresh(data.pres1_hPA);
        gg3_temperature.refresh(data.temp1_C);
        gg9_temperature.refresh(data.temp2_C);
        gg4_humidity.refresh(data.hum1_per);
        gg10_humidity.refresh(data.hum2_per);
        gg7_power.refresh(data.vol24V * data.cur24V_mA/1000);
        gg8_led1.refresh(data.pwrLED1);
        gg5_voltage.refresh(data.vol24V);
        gg6_current.refresh(data.cur24V_mA);
        });


}

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


