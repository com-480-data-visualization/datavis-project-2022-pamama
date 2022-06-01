
  var width = 300;
  var height = 250;

function createHist(datapath,column,svg_,container,description) {
  margin = {left:0,right:20,top:30,down:50}
  width = svg_.attr("width") - margin.left - margin.right,
  height = svg_.attr("height") - margin.top - margin.down;

  d3.csv(datapath, function(error, data) {
          if (error) {
              throw error;
          }

          var g = svg_.append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
          
          // X axis
          var x = d3.scaleLinear()
              .domain([0,1])     
              .range([30, width+30]);
              
          if(column == 'Loudness') {
            x = d3.scaleLinear()
            .domain([-25,0])     
            .range([30, width+30]);
          }
          g.append("g")
              .attr("transform", "translate(0," + height + ")")
              .attr("class", "whiteAxis")
              .call(d3.axisBottom(x));
                              
          // set the parameters for the histogram
          var histogram = d3.histogram()
              .value(function(d) { return d[column]; })   
              .domain(x.domain())  
              .thresholds(x.ticks(40)); 
          var bins = histogram(data);

          // Add Y axis
          var y = d3.scaleLinear()
              .domain([0, d3.max(bins, function(d) { return d.length; })])
              .range([ height + 30, 30 ]);
          g.append("g")
              .attr("class", "whiteAxis")
              .attr('transform', 'translate(' + 29 + ',' + -margin.top + ')')
              .call(d3.axisLeft(y));
         
       


          // create a tooltip
            var Tooltip = container
            .append("div")
            .style("opacity", 0)
            .style("padding", "5px")
            .attr("class", "tooltip")

          // Three function that change the tooltip when user hover / move / leave a cell
          var mouseover = function(d) {
            Tooltip
              .style("opacity", 1)
          }
          var mousemove = function(d) {
            Tooltip
              .html(("Number of songs : " + d.length))
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY) - 20 + "px")
          }
          var mouseleave = function(d) {
            Tooltip
              .style("opacity", 0)
            
          }

          // create a tooltip
          var TooltipTitle = container
          .append("div")
          .style("display", 'none')
          .style("padding", "5px")
          .attr("class", "tooltipTitle")

        // Three function that change the tooltip when user hover / move / leave a cell
        var mouseoverTitle = function(d) {
          TooltipTitle
            .style("display", 'block')
        }
        var mousemoveTitle = function(d) {
          TooltipTitle
            .html(description)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY) - 190 + "px")
        }
        var mouseleaveTitle = function(d) {
          TooltipTitle
            .style("display", 'none')
          
        }
             // Title
        g.append("text")
        .attr("x", width/2 + 30)
        .attr("y", height + 40)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style('fill', '#d4d3f3')
        .style('font-weight','bold')
        .text(column)
        .on("mouseover", mouseoverTitle)
        .on("mousemove", mousemoveTitle)
        .on("mouseleave", mouseleaveTitle);

          // append the bar rectangles to the svg element
          g.selectAll("rect")
              .data(bins)
              .enter()
              .append("rect")
                  .attr("class","bar")
                  .attr("x", 1)
                  .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
                  .attr("width", function(d) { return x(d.x1) - x(d.x0)  ; })
                  .attr("height", function(d) { return height - y(d.length); })
                  .on("mouseover", mouseover)
                  .on("mousemove", mousemove)
                  .on("mouseleave", mouseleave)
                

        });

  }
  //Create SVG elements
  description1 = "Danceability".bold() + ": <br>describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable."
  description2 = "Energy".bold() + ": <br>a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy."
  description3 = "Loudness".bold() + ": <br>The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track. Values typical range between -60 and 0 db."
  description4 = "Speechiness".bold() + ": <br>detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value."
  description5 = "Acousticness".bold() + ": <br>A measure from 0.0 to 1.0 of whether the track is acoustic."
  description6 = "Liveness".bold() + ": <br>Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live."

  svg1_container = d3.select("#hist1")
  svg1 = svg1_container.append("svg").attr("width", width).attr("height", height);
  svg2_container = d3.select("#hist2")
  svg2 =  svg2_container.append("svg").attr("width", width).attr("height", height);
  svg3_container = d3.select("#hist3")
  svg3 = svg3_container.append("svg").attr("width", width).attr("height", height);
  svg4_container = d3.select("#hist4")
  svg4 = svg4_container.append("svg").attr("width", width).attr("height", height);
  svg5_container = d3.select("#hist5")
  svg5 = svg5_container.append("svg").attr("width", width).attr("height", height);
  svg6_container = d3.select("#hist6")
  svg6 = svg6_container.append("svg").attr("width", width).attr("height", height);

  createHist('data/danceability.csv','Danceability',svg1,svg1_container,description1);
  createHist('data/energy.csv','Energy',svg2,svg2_container,description2);
  createHist('data/loudness.csv','Loudness',svg3,svg3_container,description3);
  createHist('data/speechiness.csv','Speechiness',svg4,svg4_container,description4);
  createHist('data/acousticness.csv','Acousticness',svg5,svg5_container,description5);
  createHist('data/liveness.csv','Liveness',svg6,svg6_container,description6);

