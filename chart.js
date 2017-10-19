
// YOUR CODE !!
// http://c3js.org/samples/timeseries.html
	var chart = c3.generate({
		// TELL IT WHERE TO PUT IN IN YOUR HTML (#chart)
		bindto: '#chart',
    	data: {
        	x: 'x',
			    xFormat: '%Y', // 'xFormat' can be used as custom format of 'x'
        	columns: [
              ['x', '2010','2011','2012','2013','2014','2015','2016'],
				      // ['x', '2013', '2014', '2015', '2016', '2017'],
            	['Women', 0.954, 0.948, 0.956, 0.954, 0.957, 0.956, 0.953],
            	['Men', 0.961, 0.957, 0.969, 0.951, 0.958, 0.966, 0.964]
       	 	],

   	 	},
      axis: {
        x: {
          // TELL IT WHAT TYPE OF CHART YOU'RE MAKING
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
				},
				y: {
					tick: {
							format: d3.format('.3f')
					}
				},
      },
      line: {
        width: 80,
      },
   	 	// LET'S ADD SOME DIFFERENT COLORS
   	 	color: {
   	 		pattern: ['#FF847C','#24B694','#8D7966']
   	 	}
	});
// THIS IS FOR THE TRANSITION
	setTimeout(function () {
    	chart.load({
    		// this would work if you had negative values in your data, and wanted a negative to positive y axis
        	columns: [
            	['all', 0.958, 0.952, 0.962, 0.953, 0.957, 0.961,0.958]
        	]
		});
		// THIS NUMBER SAYS HOW LONG (seconds) BEFORE THE CHART TRANSITIONS
	}, 1000);
