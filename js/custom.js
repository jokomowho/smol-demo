 $(function(){

 var bar_color = ["#a1abda"];
      
      d3.scale.bar_color = function() {
          return (bar_color);
      };
     $('.table-bar svg').each(function (idx, el) {
        nv.addGraph(function() {
          var chart = nv.models.discreteBarChart()
              .x(function(d) { return d.label })
              .y(function(d) { return d.value })
              .margin({top: 0, right: 0, bottom: 0, left: 0})
              .staggerLabels(false)
              .tooltips(true)
              .showValues(false)
              .showYAxis(false)
              .showXAxis(false)
              .color(d3.scale.bar_color())

          chart.yAxis
            .tickFormat(d3.format(',.0f'));

          d3.select(el)
            .datum(barData())
            .transition().duration(500)
            .call(chart);

          nv.utils.windowResize(chart.update);

          return chart;
        });
    });

    var barData = function(){
      return [
        {
          key: "Cumulative Return",
          values: [
            { 
              "label" : "Week 1" ,
              "value" : 6019
            } , 
            { 
              "label" : "Week 2" , 
              "value" : 5095
            } , 
            { 
              "label" : "Week 3" , 
              "value" : 3092
            } , 
            { 
              "label" : "Week 4" , 
              "value" : 4092
            } 
          ]
        }
      ];

    }

    $('.chart4 svg').each(function (idx, el) {
    nv.addGraph(function() {  
             var chart = nv.models.lineChart()
             .showYAxis(false)
              .showXAxis(false)
              .showLegend(false);
           
             chart.xAxis
                 .tickFormat(d3.format(',r'));
           
             chart.yAxis
                 .tickFormat(d3.format('%'));
           
             d3.select(el)
                 .datum(line_data())
               .transition().duration(500)
                 .call(chart);
           
             nv.utils.windowResize(chart.update);
           
             return chart;
           });
     });
           /**************************************
            * Simple test data generator
            */
       var line_data =    function() {
             var sin = [];
           
             for (var i = 0; i < 100; i++) {
               sin.push({x: i, y: Math.sin(i/10)});
             } 
             return [
               {
                 values: sin,
                 key: 'Lagos',
                 color: bar_color
               }
             ];
           }

       nv.addGraph(function() {  
             var chart = nv.models.lineChart()
             .tooltips(true);

             chart.lines
                  .interpolate('monotone');
             chart.xAxis
                 .tickFormat(function(d) { return d3.time.format("%b '%y")(new Date(d)) });
           
             chart.yAxis
                 .tickFormat(d3.format(',.1d'));
           
             d3.select('.line-chart-year svg')
                 .datum(coverageData())
               .transition().duration(500)
                 .call(chart);
           
             nv.utils.windowResize(function() { d3.select('.line-chart-year svg').call(chart) });
           
             return chart;
           });
           /**************************************
            * Simple test data generator
            */
           function coverageData() {
      return [
        {
          key: "Abia",
          values: [{x: 1422658800000, y: 0.225804093207},{x: 1425078000000, y: 0.260536172138},{x: 1427756400000, y: 0.7162465726},{x: 1430348400000, y: 0.286972662663},{x: 1433026800000, y: 0.294721289196},{x: 1435618800000, y: 0.334558345608},{x: 1438297200000, y: 0.419519756536},{x: 1440975600000, y: 0.330911933122},{x: 1443567600000, y: 0.346318025876},{x: 1446246000000, y: 0.306936771025},{x: 1448838000000, y: 0.297273777937},{x: 1451516400000, y: 0.469657928221},{x: 1454194800000, y: 1.16582179057},]
        },
        
        {
          key: "Anambra",
          values: [{x: 1422658800000, y: 0.273874110915},{x: 1425078000000, y: 0.297014934669},{x: 1427756400000, y: 0.296584121461},{x: 1430348400000, y: 0.296276397741},{x: 1433026800000, y: 0.327048769754},{x: 1435618800000, y: 0.409334092516},{x: 1438297200000, y: 0.43659841412},{x: 1440975600000, y: 0.306431280505},{x: 1443567600000, y: 0.289321841666},{x: 1446246000000, y: 0.279228503646},{x: 1448838000000, y: 0.286552328185},{x: 1451516400000, y: 0.516791215586},{x: 1454194800000, y: 1.33177528297},]
        },
        {
          key: "Delta",
          values: [{x: 1422658800000, y: 0.116827039904},{x: 1425078000000, y: 0.28189428905},{x: 1427756400000, y: 0.308036980667},{x: 1430348400000, y: 0.281532034663},{x: 1433026800000, y: 0.20696800661},{x: 1435618800000, y: 0.257743996563},{x: 1438297200000, y: 0.260219401543},{x: 1440975600000, y: 0.451006712187},{x: 1443567600000, y: 0.255691221702},{x: 1446246000000, y: 0.256294979014},{x: 1448838000000, y: 0.244461335696},{x: 1451516400000, y: 0.220431794672},{x: 1454194800000, y: 0.373954976616},]
        },
        {
          key: "Edo",
          values: [{x: 1422658800000, y: 0.341663779224},{x: 1425078000000, y: 0.265052154627},{x: 1427756400000, y: 0.363243388665},{x: 1430348400000, y: 0.395973800012},{x: 1433026800000, y: 0.362521394298},{x: 1435618800000, y: 0.385304327686},{x: 1438297200000, y: 0.488068192721},{x: 1440975600000, y: 0.338856023349},{x: 1443567600000, y: 0.330031647741},{x: 1446246000000, y: 0.363082945473},{x: 1448838000000, y: 0.336048267473},{x: 1451516400000, y: 0.334283392352},{x: 1454194800000, y: 0.950628109753},]
        },
        {
          key: "Imo",
          values: [{x: 1422658800000, y: 0.191992677651},{x: 1425078000000, y: 0.220946463085},{x: 1427756400000, y: 0.208808631637},{x: 1430348400000, y: 0.234664741337},{x: 1433026800000, y: 0.226256764344},{x: 1435618800000, y: 0.234222216232},{x: 1438297200000, y: 0.302244646641},{x: 1440975600000, y: 0.206027045263},{x: 1443567600000, y: 0.194394956792},{x: 1446246000000, y: 0.201665012086},{x: 1448838000000, y: 0.219176362666},{x: 1451516400000, y: 0.211653435882},{x: 1454194800000, y: 0.425188445283},]
        },
        {
          key: "Osun",
          values: [{x: 1422658800000, y: 0.417894177829},{x: 1425078000000, y: 0.43838559813},{x: 1427756400000, y: 0.414769599557},{x: 1430348400000, y: 0.434970361413},{x: 1433026800000, y: 0.413897624225},{x: 1435618800000, y: 0.287751859538},{x: 1438297200000, y: 0.305118701566},{x: 1440975600000, y: 0.556610920218},{x: 1443567600000, y: 0.468105424027},{x: 1446246000000, y: 0.484309632278},{x: 1448838000000, y: 0.474281915961},{x: 1451516400000, y: 0.628984872768},{x: 1454194800000, y: 0.78959462153},]
        },
        {
          key: "Oyo",
          values: [{x: 1422658800000, y: 0.385489282742},{x: 1425078000000, y: 0.51188709565},{x: 1427756400000, y: 0.499645176724},{x: 1430348400000, y: 0.475554829124},{x: 1433026800000, y: 0.435069054391},{x: 1435618800000, y: 0.493961428652},{x: 1438297200000, y: 0.638897004504},{x: 1440975600000, y: 0.47883391455},{x: 1443567600000, y: 0.757206406693},{x: 1446246000000, y: 0.810721080854},{x: 1448838000000, y: 0.755894772522},{x: 1451516400000, y: 0.490113968418},{x: 1454194800000, y: 1.0401727749},]
        }
      ];
    }

    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });    

      $('.btn-toggle').click(function() { 
        $(this).find('.btn').toggleClass('active');  
        
        if ($(this).find('.btn-primary').size()>0) {
          $(this).find('.btn').toggleClass('btn-primary');
        }
        
        $(this).find('.btn').toggleClass('btn-default');
         
      });

      $('form').submit(function(){
        alert($(this["options"]).val());
          return false;
      });
});
