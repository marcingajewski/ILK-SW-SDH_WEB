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
      value : 325,
      min: 0,
      max: 1000,
      decimals: 1,
      gaugeWidthScale: 0.6,
      refreshAnimationType: "bounce",
      title: "Ambient Light",
      label: "lx",
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