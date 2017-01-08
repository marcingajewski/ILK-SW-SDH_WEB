/**
 * Created by Marcin.Gajewski on 26/12/2016.
 */


/**
 * Created by Marcin.Gajewski on 25/12/2016.
 */

var gg1_light = new JustGage({
  id: "gg1_light",
  value : 50000,
  min: 0,
  max: 150000,
  decimals: 0,
  symbol: " lx",
  gaugeWidthScale: 0.6,
  refreshAnimationType: "linear",
  title: "Ambient Light",
  label: "lx",
  height: 200,
  weight: 200,
  shadowOpacity: 1,
  shadowSize: 5,
  shadowVerticalOffset: 10,
  pointer: true,
    pointerOptions: {
      toplength: -15,
      bottomlength: 10,
      bottomwidth: 12,
      color: '#8e8e93',
      stroke: '#ffffff',
      stroke_width: 3,
      stroke_linecap: 'round'
    },

  customSectors: [{
    color : "##ffee46",
    lo : 0.0001,
    hi : 0.0108
  },{
    color : "#414c41",
    lo : 0.0109,
    hi : 1.08
  },
    {
    color : "#6c7041",
    lo : 1.09,
    hi : 10.75
  },
  {
    color : "#aea943",
    lo : 10.76,
    hi : 107.53
  },
  {
    color : "#d4c943",
    lo : 107.54,
    hi : 1075.3
  },
    {
    color : "#f8e944",
    lo : 1075.4,
    hi : 10752.7
  },
  {
    color : "#ffee45",
    lo : 10752.8,
    hi : 150000
  }],
  counter: true
});

var gg2_pressure = new JustGage({
  id: "gg2_pressure",
  value : 1024,
  min: 950,
  max: 1050,
  decimals: 1,
  symbol: " hPa",
  gaugeWidthScale: 0.6,
  refreshAnimationType: "linear",
  title: "Pressure",
  label: "hPa",
  pointer: true,
  customSectors: [{
    color : "red",
    lo : 950,
    hi : 1000
  },{
    color : "green",
    lo : 1000,
    hi : 950
  }],
  counter: true
});

var gg3_temperature = new JustGage({
  id: "gg3_temperature",
  value : 23.1,
  min: -40,
  max: 60,
  decimals: 1,
  symbol: " ºC",
  gaugeWidthScale: 0.6,
  refreshAnimationType: "linear",
  title: "Temperature",
  label: "ºC",
  pointer: true,
  customSectors: [{
        color : "#001166",
        lo : -40,
        hi : -30
      },{
        color : "#0012F8",
        lo : -30,
        hi : -10
      },
        {
        color : "#46C9E5",
        lo : -10,
        hi : 0
      },
      {
        color : "#67E5A2",
        lo : 0,
        hi : 10
      },
      {
        color : "#63E525",
        lo : 10,
        hi : 20
      },
        {
        color : "#DA881B",
        lo : 20,
        hi : 30
      },
      {
        color : "#DA652F",
        lo : 30,
        hi : 60
      }],
  counter: true
});

var gg4_humidity = new JustGage({
  id: "gg4_humidity",
  value : 40,
  min: 0,
  max: 100,
  decimals: 0,
  symbol: " %",
  gaugeWidthScale: 0.6,
  refreshAnimationType: "linear",
  title: "Humidity",
  label: "%",
  pointer: true,

  customSectors: [{
        color : "#001166",
        lo : -40,
        hi : -30
      },{
        color : "#0012F8",
        lo : -30,
        hi : -10
      },
        {
        color : "#46C9E5",
        lo : -10,
        hi : 0
      },
      {
        color : "#67E5A2",
        lo : 0,
        hi : 10
      },
      {
        color : "#63E525",
        lo : 10,
        hi : 20
      },
        {
        color : "#DA881B",
        lo : 20,
        hi : 30
      },
      {
        color : "#DA652F",
        lo : 30,
        hi : 60
      }],
  counter: true
});

var gg5_voltage = new JustGage({
  id: "gg5_voltage",
  value : 3.3,
  min: 0,
  max: 6,
  decimals: 2,
  symbol: "V",
  gaugeWidthScale: 0.6,
  refreshAnimationType: "linear",
  title: "Voltage",
  label: "Volts",

  pointer: true,
    pointer: true,
    pointerOptions: {
          toplength: 5,
          bottomlength: 5,
          bottomwidth: 4,
          color: '#000'
        },

  counter: true
});


var gg6_current = new JustGage({
  id: "gg6_current",
  value : 0.15,
  min: 0,
  max: 1,
  decimals: 2,
  symbol: "A",
  gaugeWidthScale: 0.6,
  refreshAnimationType: "linear",
  title: "Current",
  label: "Amper",

  pointer: true,
  pointer: true,
    pointerOptions: {
          toplength: 5,
          bottomlength: 5,
          bottomwidth: 4,
          color: '#000'
        },
  counter: true
});

var gg7_power = new JustGage({
  id: "gg7_power",
  value : 0.5,
  min: 0,
  max: 10,
  decimals: 1,
  symbol: "W",
  donut: true,
  gaugeWidthScale: 0.6,
  refreshAnimationType: "linear",
  title: "Power",
  label: "Watt",

  pointer: true,
    pointerOptions: {
          toplength: 5,
          bottomlength: 5,
          bottomwidth: 4,
          color: '#000'
        },
  counter: true
});


var gg8_led1 = new JustGage({
  id: "gg8_led1",
  value : 40,
  min: 0,
  max: 100,
  donut: true,
  decimals: 0,
  symbol: " %",
  gaugeWidthScale: 0.6,
  refreshAnimationType: "linear",
  title: "PWM",
  label: "%",
  counter: true
});



var gg9_temperature = new JustGage({
  id: "gg9_temperature",
  value : 32.1,
  min: -40,
  max: 60,
  decimals: 1,
  symbol: " ºC",
  gaugeWidthScale: 0.6,
  refreshAnimationType: "linear",
  title: "Temperature",
  label: "ºC",
  counter: true
});


var gg10_humidity = new JustGage({
  id: "gg10_humidity",
  value : 40,
  min: 0,
  max: 100,
  decimals: 0,
  symbol: " %",
  gaugeWidthScale: 0.6,
  refreshAnimationType: "linear",
  title: "Humidity",
  label: "%",
  pointer: true,
  counter: true
});



var gg11_food = new JustGage({
  id: "gg11_food",
  value : 90,
  min: 0,
  max: 100,
  decimals: 0,
  symbol: " %",
  gaugeWidthScale: 0.6,
  refreshAnimationType: "linear",
  title: "Food supply",
  label: "%",
  pointer: true,
  counter: true
});


var gg12_water = new JustGage({
  id: "gg12_water",
  value : 70,
  min: 0,
  max: 100,
  decimals: 0,
  symbol: " %",
  gaugeWidthScale: 0.6,
  refreshAnimationType: "linear",
  title: "Water supply",
  label: "%",
  pointer: true,
  counter: true
});

var gg13_fan = new JustGage({
  id: "gg13_fan",
  value : 15,
  min: 0,
  max: 100,
  decimals: 1,
  symbol: "%",
  donut: true,
  gaugeWidthScale: 0.6,
  refreshAnimationType: "linear",
  title: "Ventilation fan",
  label: "%",

  pointer: true,
    pointerOptions: {
          toplength: 5,
          bottomlength: 5,
          bottomwidth: 4,
          color: '#000'
        },
  counter: true
});

var gg14_heater = new JustGage({
  id: "gg14_heater",
  value : 1500,
  min: 0,
  max: 2000,
  decimals: 0,
  symbol: "W",
  donut: true,
  gaugeWidthScale: 1,
  refreshAnimationType: "linear",
  title: "Heater",
  label: "W",
  titleFontColor: "red",
  valueFontColor: "blue",
  //gaugeColor: "green",
  shadowOpacity: 0.5,
  shadowSize: 10,
  donutStartAngle: 180,
  valueMinFontSize: 1,
    valueFontSize: 1,
  hideValue: false,  //here we switch on or off the value!
  hideInnerShadow: true,
  humanFriendly: false,
  noGradient: false,
  relativeGaugeSize: false,
  counter: true,
  


  pointer: true,
    pointerOptions: {
          toplength: 5,
          bottomlength: 5,
          bottomwidth: 4,
          color: '#000'
        },
  counter: true
});