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

$(document).ready(function (){
    Highcharts.setOptions({
        colors: ['#D82928', '#212121', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']});
    });

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

    //highchart 7

    $(document).ready(function() {
       var chart = {
          type: 'column'
       };
       var title = {
          text: 'Miami-Dade County, Florida 2014 County Health Profile'
       };
       var subtitle = {
          text: 'Social & Mental Health'
       };
       var xAxis = {
          categories: ['Total Licensed Dentists (Fiscal Year)',
                        'Total Licensed Physicians (Fiscal Year)',
                        'Total Licensed Family Practice Physicians (Fiscal Year)',
                        'Total Licensed Internists (Fiscal Year)',
                        'Total Licensed OB/GYN (Fiscal Year)',
                        'Total Licensed Pediatricians (Fiscal Year)',
                        'Total Hospital Beds',
                        'Total Acute Care Beds',
                        'Total Specialty Beds',
                        'Total Nursing Home Beds',
                        'County Public Health Department Full-Time Employees'],
          crosshair: true
       };
       var yAxis = {
          min: 0,
          title: {
             text: 'Rate Per 100,000'
          }
       };
       var tooltip = {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
             '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
            name: 'County',
                data: [66.1, 299.1, 13.5, 53.0, 9.4, 24.9, 352.6, 286.5, 66.1, 325.2, 28.0, ]
            }, {
                name: 'State',
                data: [59.5, 259.3, 19.1, 49.6, 10.2, 18.7, 317.3, 260.3, 57.0, 426.7, 51.1]

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
       $('#highcharts7').highcharts(json);

    });
    //end of highchart 7



    // Invest Miami Tweeter feed
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

// highcharts6
    $(document).ready(function() {
       var chart = {
          type: 'bar'
       };
       var title = {
          text: 'Percentage of insured individuals in Miami MSA (2013 - 2014)'
       };
       var subtitle = {
          text: 'Source: US Census Bureau'
       };
       var xAxis = {
          categories: ['Covered by Public Health Insurance', 'Covered by Private Health Insurance', 'Insured'],
          title: {
             text: null
          }
       };
       var yAxis = {
          min: 0,
          title: {
             text: 'Percentage of the Miami MSA population',
             align: 'high'
          },
          labels: {
             overflow: 'justify'
          }
       };
       var tooltip = {
          valueSuffix: ' %'
       };
       var plotOptions = {
          bar: {
             dataLabels: {
                enabled: true
             }
          }
       };
       var legend = {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 100,
          floating: true,
          borderWidth: 1,
          backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: true
       };
       var credits = {
          enabled: false
       };

       var series= [{
             name: '2013',
                data: [31.9, 50.5, 75.2]
            }, {
                name: '2014',
                data: [33.1, 54.7, 80.4]
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
       json.legend = legend;
       json.credits = credits;
       $('#highcharts6').highcharts(json);

    });

// highchart 8
$(document).ready(function() {
   var title = {
      text: 'Real Estate Charts Miami, Florida'
   };
   var subtitle = {
      text: 'Miami, Florida Metropolitan Area House, Prices'
   };
   var xAxis = {
      categories: ['1986', '1987',  '1988', '1989', '1990', '1991',
'1992', '1993', '1994', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
'2009', '2010', '2011','2012', '2012', '2012', '2012', '2012', '2012', '2012', '2012', '2012', '2012','2012','2013', '2014']
   };
   var yAxis = {
      title: {
         text: 'Price'
      },
      plotLines: [{
         value: 0,
         width: 1,
         color: '#808080'
      }]
   };

   var tooltip = {
      valueSuffix: '\xB0C'
   }

   var legend = {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
   };

   var series =  [
      {
         name: 'Nominal Median',
         data: [99604, 103834, 111280, 115133, 113786, 113728, 115770, 122042,
          125505, 126649, 127388, 131647, 136470, 145162, 160444, 181159, 210710,
         241405, 303723, 393549, 404775, 316861, 223414, 213694, 200541, 202120, 223037, 258672]
      },
      {
         name: 'Real House Price',
         data: [202843, 203610, 209959, 207437, 194873, 190731, 189235, 195545,
           196221, 193318, 188972, 192424, 196512, 203401, 216902, 241916, 273999,
           307652, 376628, 469271, 473014, 354450, 250098, 233114, 215131, 210512, 228593, 261054]
      },

   ];

   var json = {};

   json.title = title;
   json.subtitle = subtitle;
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.tooltip = tooltip;
   json.legend = legend;
   json.series = series;

   $('#highcharts8').highcharts(json);
});

// Calendar

$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyBCRdjpkLRAyUGBzH4OP8sTNp4pHWIkEYc',
        events: {
            googleCalendarId: 'investmiamitest@gmail.com'
        }
    });
});

// highcharts fade-in on scroll

function showImages(el) {
        var windowHeight = jQuery( window ).height();
        $(el).each(function(){
            var thisPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + windowHeight - 200 > thisPos ) {
                $(this).addClass("fadeIn");
            }
        });
    }

    // if the image in the window of browser when the page is loaded, show that image
    $(document).ready(function(){
            showImages('.hcfn');
    });

    // if the image in the window of browser when scrolling the page, show that image
    $(window).scroll(function() {
            showImages('.hcfn');
    });


// fade out Heavy lifting, purchase your access today, twitter when you scroll-half
$(window).on('scroll', function(){
  var curPos = $(window).scrollTop();
  $('body').css('background-position', '0 -' + curPos * .1 + 'px');
  fadePanels(curPos);
}).scroll();

function fadePanels(curPos) {
  var panels = $('.panel');

  for (var i = 0; i < panels.length; i++) {
    var offsetTop = $(panels[i]).offset().top;
    var halfPanel = (($(panels[i]).height() + 80) / 2) // half the panel height + padding
    var offsetHalf = halfPanel + offsetTop;

    $(panels[i]).attr('data-scroll-top' , offsetTop);
    $(panels[i]).attr('data-scroll-half', offsetHalf);

    var j = (curPos - offsetHalf) / halfPanel;

    if (curPos > $(panels[i]).data('scroll-half')) {
      $(panels[i]).css('opacity', 1 - (j));
    } else {
      $(panels[i]).css('opacity', '1');
    }
  }
}

// Reasons to invest in Miami
$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });

});
