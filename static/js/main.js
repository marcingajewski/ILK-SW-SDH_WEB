var led_user_control = true;
var ventilation_user_control = true;
var heater_user_control = true;



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

$("#gg7_power").click(function () {
    $("#slider_text").text("System Power capacity");
    $("#slider_field").fadeToggle("slow");
});

$("#gg8_led1").click(function () {
    if(led_user_control == true)
    {
        $("#slider_text").text("Set the LED power level");
    }
    else {
        $("#slider_text").text("LED control not allowed by user. Please check settings!");
    }
    $("#slider_field").fadeToggle("slow");
});

$("#gg13_fan").click(function () {
    if(ventilation_user_control == true)
    {
        $("#slider_text").text("Ventilation Fan power level");
    }
    else {
        $("#slider_text").text("Ventilation control not allowed by user. Please check settings!");
    }
    $("#slider_field").fadeToggle("slow");
});

$("#gg14_heater").click(function () {
    if(heater_user_control == true)
    {
        $("#slider_text").text("Heater power control 0W - 1000W");
    }
    else {
        $("#slider_text").text("Heater control not allowed by user. Please check settings!");
    }

    $("#slider_field").fadeToggle("slow");
});