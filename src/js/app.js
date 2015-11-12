'use strict';
var d3 = require('d3');


			
			


			//Width and height
			var w = 500;
			var h = 100;
			
			//Data
			var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
			
			//Create SVG element and add it to the DOM
			var svg = d3.select("body")
						.append("svg")
						.attr("width", w)
						.attr("height", h);

			var circles = svg.selectAll("rect")
			    .data(dataset)
			    .enter()
			    .append("rect")
			    .attr("x", function(d, i){
			    	return i * 21;
			    })
			    .attr("y", function(d){
			    	return h - d;
			    })
			    .attr("width", 20)
			    .attr("height", function(d) {
   				 return d;
				})
				.attr('fill', 'teal');