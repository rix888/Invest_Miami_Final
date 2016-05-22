// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

//= require_tree .



$( document ).ready(function(){
   $(".button-collapse").sideNav();
   $(".dropdown-button").dropdown();
})

$(document).ready(function(){
  $('.slider').slider({full_width: true});
});

// highcharts1 test
// $(function () {
//     $('#highcharts1').highcharts({
//         chart: {
//             type: 'bar'
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         xAxis: {
//             categories: ['Apples', 'Bananas', 'Oranges']
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruit eaten'
//             }
//         },
//         series: [{
//             name: 'Jane',
//             data: [1, 0, 4]
//         }, {
//             name: 'John',
//             data: [5, 7, 3]
//         }],
//     });
// });

// highcharts2
$(document).ready(function() {
   var chart = {
      type: 'area'
   };
   var title = {
      text: 'Increase in Gross Domestic Product'
   };
   var subtitle = {
      text: 'Source: <a href="https://www.bea.gov/newsreleases/regional/gdp_metro/2015/pdf/gdp_metro0915.pdf">' +
         'Bureau of Economic Analysis</a>'
   };
   var xAxis = {
      allowDecimals: true,
      labels: {
         formatter: function () {
            return this.value; // clean, unformatted number for year
         }
      }
   };
   var yAxis = {
      title: {
         text: 'In millions of chained dollars, all industry totals'
      },
      labels: {
         formatter: function () {
            return this.value + '%';
         }
      }
   };
   var tooltip = {
      pointFormat: '{series.name} was at <b>{point.y}%</b><br/>GDP increase in {point.x}'
   };
   var plotOptions = {
      area: {
         pointStart: 2010,
         marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
               hover: {
                 enabled: true
               }
            }
         }
      }
   };
   var series= [{
         name: 'USA',
            data: [3.53, 3.39, 4.11, 3.61, 3.86]
        }, {
            name: 'Miami MSA (Miami, Ft. Lauderdale, West Palm Beach, FL)',
            data: [1.25, 1.81, 5.57, 4.73, 5.08]
      }
   ];

   var json = {};
   json.chart = chart;
   json.title = title;
   json.subtitle = subtitle;
   json.tooltip = tooltip;
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.series = series;
   json.plotOptions = plotOptions;
   $('#highcharts2').highcharts(json);

});

// highcharts3
$(document).ready(function() {
   var title = {
      text: 'Unemployment rate'
   };
   var subtitle = {
      text: 'Source: Bureau of Labor Statistics &<br />Economic Research Federal Reserve Bank of St. Louis'
   };
   var xAxis = {
      categories: ['Jan 2009', 'Jan 2010', 'Jan 2011', 'Jan 2012', 'Jan 2013', 'Jan 2014',
         'Jan 2015', 'Jan 2016']
   };

   var yAxis = {
      title: {
         text: 'Unemployment (%)'
      },
      plotLines: [{
         value: 0,
         width: 1,
         color: '#808080'
      }]
   };

   var tooltip = {
      valueSuffix: '%'
   }

   var plotOptions = {
      area: {
         pointStart: 2009,
         marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
               hover: {
                 enabled: true
               }
            }
         }
      }
   };

   var legend = {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
   };

   var series =  [
      {
         name: 'USA',
         data: [7.8, 9.8, 9.1, 8.3, 8.0, 6.6, 5.7, 4.9]
      },

      {
         name: 'Miami MSA',
         data: [7.7, 11.2, 10.2, 8.4, 8.0, 6.6, 5.8, 5.2]
      }
   ];

   var json = {};

   json.title = title;
   json.subtitle = subtitle;
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.tooltip = tooltip;
   json.legend = legend;
   json.series = series;
   json.plotOptions = plotOptions;

   $('#highcharts3').highcharts(json);
});


// highcharts4
$(document).ready(function() {
   var chart = {
       plotBackgroundColor: null,
       plotBorderWidth: null,
       plotShadow: false
   };
   var title = {
      text: 'Firm size breakdown in Miami-Dade County (2013)'
   };
   var tooltip = {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
   };
   var plotOptions = {
      pie: {
         allowPointSelect: true,
         cursor: 'pointer',
         dataLabels: {
            enabled: true,
            format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
            style: {
               color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
         }
      }
   };
   var series= [{
      type: 'pie',
      name: 'Firm size',
      data: [
        {
           name: '1 to 4',
           y: 82.25,
           sliced: true,
           selected: true
        },
         ['5 to 9', 4.8],
         ['10 to 19', 2.45],
         ['20 to 49', 1.41],
         ['50 to 99', 0.53],
         ['100 to 249', 0.5],
         ['250 to 499', 0.38 ],
         ['500 to 999', 0.52 ],
         ['1000 to 2499', 0.88],
         ['2500 to 4999', 1.01],
         ['5000 to 9999', 0.60],
         ['10000+', 4.67],
      ]
   }];

   var json = {};
   json.chart = chart;
   json.title = title;
   json.tooltip = tooltip;
   json.series = series;
   json.plotOptions = plotOptions;
   $('#highcharts4').highcharts(json);
});


// highcharts5
$(document).ready(function() {
   var chart = {
      type: 'column'
   };
   var title = {
      text: 'Correlation of job creation and firm size for Miami-Dade County (2013)'
   };
   var subtitle = {
      text: 'Source: Census.gov'
   };
   var xAxis = {
      categories: ['1 to 4', '5 to 9', '10 to 19', '20 to 49', '50 to 99', '100 to 249', '250 to 249',
                  '500 to 999', '1,000 to 2,499', '2,500 to 4,999', '5,000 to 9,999', '10,000+'],
      crosshair: true,
      title: {
      text: 'Firm size'
      }
   };
   var yAxis = {
      min: 0,
      title: {
         text: 'Jobs created'
      }
   };
   var tooltip = {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
         '<td style="padding:0"><b>{point.y}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
   };
   var plotOptions = {
      column: {
         pointPadding: 0.2,
         borderWidth: 0
      }
   };
   var credits = {
      enabled: false
   };

   var series= [{
        //     name: 'Number of businesses created',
        //     data: [17347, 1013, 517, 298, 112, 105, 81, 111, 185, 213, 126, 982]
        // }, {
            name: 'Number of jobs created',
            data: [48863, 28140, 28292, 30899, 19210, 22636, 10471, 13733, 18844, 10095, 8978, 106969]
   }];

   var json = {};
   json.chart = chart;
   json.title = title;
   json.subtitle = subtitle;
   json.tooltip = tooltip;
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.series = series;
   json.plotOptions = plotOptions;
   json.credits = credits;
   $('#highcharts5').highcharts(json);

    });

    // Invest Miami Tweeter feed
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
