/**
 * Created by Marcin.Gajewski on 26/12/2016.
 */


/**
 * Created by Marcin.Gajewski on 25/12/2016.
 */

var counter = -40
document.addEventListener("DOMContentLoaded", function(event) {
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

    document.getElementById('gg1_refresh').addEventListener('click', function() {
      counter+=10;
      if(counter>60)
      {
        counter = -40
      }
      gg1_light.refresh(counter);
    });

    document.getElementById('gg1_update').addEventListener('click', function() {
      gg1_light.update({
        value: getRandomInt(0, 100),
        customSectors: [{
          color : "#00ff00",
          lo : 0,
          hi : 25
        },{
          color : "#ff0000",
          lo : 25,
          hi : 100
        }]
      });
      document.getElementById('gg1_text').innerHTML = "<b>UPDATE</b>: 0-25 is green, 26-100 is red"
    });
  });